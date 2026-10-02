export function embedUrl({ videoId, channelId, autoplay }: { videoId?: string | null; channelId?: string; autoplay?: boolean }) {
  const params = new URLSearchParams({ rel: "0", modestbranding: "1", playsinline: "1" });
  if (autoplay) params.set("autoplay", "1");
  if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
  if (channelId) {
    params.set("channel", channelId);
    return `https://www.youtube.com/embed/live_stream?${params}`;
  }
  return null;
}
