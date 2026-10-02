import type { Metadata } from "next";
import { Bell, CalendarClock, Radio, Video } from "lucide-react";
import { site } from "@/lib/site";
import { streamCategories } from "@/lib/data";
import { getLiveStatus } from "@/lib/youtube";
import { CtaBand } from "@/components/cta-band";
import { YouTubePlayer } from "@/components/live/youtube-player";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Live from the ponds",
  description: "Watch makhana being harvested, popped, graded and packed — live on YouTube from the villages of Mithila.",
};

// Re-check the channel's live status every two minutes.
export const revalidate = 120;

/** Regular broadcast slots (IST). Edit to match your real schedule. */
const schedule = [
  { day: "Mon & Thu", time: "6:30 AM", what: "Dawn harvest from the ponds", season: "Jul – Oct" },
  { day: "Daily", time: "11:00 AM", what: "The popping floor", season: "Year-round" },
  { day: "Wed", time: "4:00 PM", what: "Grading & quality checks", season: "Year-round" },
  { day: "Sat", time: "5:30 PM", what: "Village stories & Q&A", season: "Monthly" },
];

export default async function LivePage() {
  const status = await getLiveStatus();
  const channelId = site.youtube.channelId;
  const isLive = status.configured && status.live;
  const upcoming = status.configured ? status.upcoming : [];

  return (
    <>
      <PageHero
        eyebrow="Live from the ponds"
        title={
          <>
            See every step, <em className="text-haldi">as it happens.</em>
          </>
        }
        hindi="सीधा प्रसारण"
        intro="Our cameras go where makhana is made — the ponds at dawn, the roasting pans and the packing floor. Tune in live on YouTube or catch the recordings below."
      >
        <ButtonLink href={site.social.youtube} external variant="light">
          <Bell className="size-4" /> Subscribe on YouTube
        </ButtonLink>
      </PageHero>

      {/* Main stage */}
      <section className="grain bg-cream py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <YouTubePlayer
              stage
              videoId={isLive ? status.videoId : null}
              channelId={channelId}
              live={isLive}
              title={isLive && status.title ? status.title : "Mithila Makhana — live channel"}
              emptyNote="Our first broadcast is coming soon — subscribe to get notified"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className={`rounded-[2rem] p-7 ${isLive ? "bg-sindoor text-pearl" : "bg-pond text-pearl"}`}>
              <div className="flex items-center gap-3">
                <span className="relative flex size-3">
                  {isLive && <span className="animate-pulse-ring absolute inset-0 rounded-full bg-pearl" />}
                  <span className={`relative size-3 rounded-full ${isLive ? "bg-pearl" : "bg-haldi"}`} />
                </span>
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase">
                  {isLive ? "We're live right now" : "Off air right now"}
                </p>
              </div>
              <p className="font-display mt-4 text-2xl leading-snug font-semibold">
                {isLive
                  ? "Press play to join the stream from the ponds."
                  : "Our next broadcast is coming up — subscribe so you never miss a harvest."}
              </p>
              <ButtonLink href={site.social.youtube} external variant="light" className="mt-6">
                <Radio className="size-4" /> Open YouTube channel
              </ButtonLink>
            </div>
            <div className="flex-1 rounded-[2rem] border border-pond/10 bg-pearl p-7">
              <h2 className="font-display flex items-center gap-2 text-2xl font-semibold text-pond">
                <CalendarClock className="size-5 text-sindoor" /> Broadcast schedule
              </h2>
              <p className="mt-1 text-sm text-muted">All times IST</p>
              {upcoming.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {upcoming.map((u) => (
                    <li key={u.videoId}>
                      <a
                        href={`https://www.youtube.com/watch?v=${u.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl bg-haldi/15 px-4 py-3 font-semibold text-pond hover:bg-haldi/25"
                      >
                        Upcoming · {u.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-5 divide-y divide-pond/10">
                {schedule.map((s) => (
                  <li key={s.what} className="flex items-baseline justify-between gap-4 py-3">
                    <div>
                      <p className="font-semibold text-pond">{s.what}</p>
                      <p className="text-xs text-muted">{s.season}</p>
                    </div>
                    <p className="shrink-0 text-right text-sm font-bold text-sindoor">
                      {s.day}
                      <br />
                      <span className="font-semibold text-muted">{s.time}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-pearl py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Stream library"
            title={
              <>
                Pick a stage of the <em className="text-sindoor">makhana journey.</em>
              </>
            }
            intro="Recordings from past broadcasts, organised by process. New sessions are added every season."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streamCategories.map((c, i) => (
              <Reveal key={c.key} delay={(i % 3) * 0.08} className="group">
                <YouTubePlayer videoId={c.videoId || null} title={c.title} />
                <div className="mt-4 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-pond">{c.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{c.description}</p>
                  </div>
                  <span className="font-deva shrink-0 text-xl text-husk/60" lang="hi">
                    {c.hindi}
                  </span>
                </div>
                <p className="mt-3 inline-flex items-center gap-2 px-1 text-xs font-bold tracking-wide text-sindoor uppercase">
                  <Video className="size-3.5" /> {c.season}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Buying in bulk? Watch your own lot being packed."
        body="Book a private live session from our packing floor and inspect grade, colour and packing before your order is dispatched."
      />
    </>
  );
}
