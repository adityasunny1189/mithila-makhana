export type LiveStatus =
  | { configured: false }
  | { configured: true; live: boolean; videoId: string | null; title: string | null; upcoming: { videoId: string; title: string; startsAt: string | null }[] };

type SearchItem = { id: { videoId: string }; snippet: { title: string; publishedAt: string } };

/**
 * Asks the YouTube Data API whether the channel is broadcasting right now.
 * Needs YOUTUBE_API_KEY (server-only) and NEXT_PUBLIC_YOUTUBE_CHANNEL_ID.
 * Results are cached for two minutes to stay well within API quota.
 */
export async function getLiveStatus(): Promise<LiveStatus> {
  const key = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  if (!key || !channelId) return { configured: false };

  const search = async (eventType: "live" | "upcoming") => {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.search = new URLSearchParams({
      part: "snippet",
      channelId,
      eventType,
      type: "video",
      maxResults: "3",
      key,
    }).toString();
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) return [] as SearchItem[];
    const json = (await res.json()) as { items?: SearchItem[] };
    return json.items ?? [];
  };

  try {
    const [live, upcoming] = await Promise.all([search("live"), search("upcoming")]);
    return {
      configured: true,
      live: live.length > 0,
      videoId: live[0]?.id.videoId ?? null,
      title: live[0]?.snippet.title ?? null,
      upcoming: upcoming.map((u) => ({ videoId: u.id.videoId, title: u.snippet.title, startsAt: null })),
    };
  } catch {
    return { configured: true, live: false, videoId: null, title: null, upcoming: [] };
  }
}
