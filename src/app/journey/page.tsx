import type { Metadata } from "next";
import { ChevronDown, Radio } from "lucide-react";
import clsx from "clsx";
import { journeySteps } from "@/lib/content";
import { site } from "@/lib/site";
import { Band, Frame } from "@/components/mithila/borders";
import { Flower, Makhana, Sun, Vine } from "@/components/mithila/motifs";
import { StepNav } from "@/components/journey/step-nav";
import { YouTubePlayer } from "@/components/live/youtube-player";
import { MarketplaceCards } from "@/components/shared/marketplace-cards";
import { MediaSlot } from "@/components/shared/media-slot";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Our Makhana Journey",
  description: "From the water fields to your home — discover every step behind your SwadUp Makhana: farming, harvesting, cleaning, processing, quality check and packing.",
};

const bands = ["triangles", "leaves", "scallops", "triangles", "leaves", "scallops"] as const;

export default function JourneyPage() {
  const navItems = [
    ...journeySteps.map((s) => ({ id: s.key, n: s.n, label: s.label })),
    { id: "buy", n: 7, label: "Buy SwadUp" },
  ];

  return (
    <>
      {/* Welcome — the first thing a customer sees after scanning the QR */}
      <section className="paper filler relative overflow-hidden pt-28 pb-14 sm:pt-36">
        <Sun className="animate-spin-slow pointer-events-none absolute top-20 -right-20 w-44 opacity-90 sm:top-24 sm:w-64" />
        <Container className="relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-kohl bg-haldi px-4 py-1.5 text-sm font-extrabold">
              <Makhana className="size-5" /> Welcome to SwadUp
            </span>
            <p className="font-display mx-auto mt-5 max-w-xl text-2xl text-sindoor sm:text-3xl">
              Let&apos;s discover the journey behind your Makhana.
            </p>
          </Reveal>
          <Heading
            as="h1"
            className="mt-10"
            title="The Journey of Your Makhana"
            intro="From the water fields to your home — discover every step behind your SwadUp Makhana."
          />
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <a href="#farming" className="grid size-14 animate-bounce place-items-center rounded-full border-[2.5px] border-kohl bg-pearl" aria-label="Start the journey">
              <ChevronDown className="size-6" />
            </a>
          </Reveal>
        </Container>
      </section>

      <div className="relative bg-pearl pb-10">
        <Band kind="triangles" />
        <div className="px-3 pt-6">
          <StepNav items={navItems} />
        </div>

        <Container className="mt-10">
          {journeySteps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.key}>
                <section id={s.key} className="scroll-mt-40 py-8 sm:py-12" aria-labelledby={`${s.key}-title`}>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <Reveal className={clsx(flip && "lg:order-2")}>
                      <MediaSlot scene={s.key} alt={`${s.label} — ${s.title}`} photo={s.photo} video={s.video} youtubeId={s.youtubeId} band={bands[i]} priority={i === 0} />
                    </Reveal>
                    <Reveal delay={0.1}>
                      <div className="flex items-center gap-4">
                        <span className="font-display grid size-16 shrink-0 place-items-center rounded-full border-[2.5px] border-kohl bg-sindoor text-3xl text-pearl shadow-[3px_3px_0_var(--kohl)]">
                          {s.n}
                        </span>
                        <div>
                          <p className="text-xs font-extrabold tracking-[0.22em] text-sindoor uppercase">
                            Step {s.n} — {s.label}
                          </p>
                          <p className="font-display text-lg text-leaf" lang="hi">
                            {s.hindi}
                          </p>
                        </div>
                      </div>
                      <h2 id={`${s.key}-title`} className="font-display mt-5 text-4xl leading-tight text-kohl sm:text-5xl">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-muted">{s.summary}</p>
                      <details className="group mt-6 rounded-2xl border-2 border-kohl bg-paper">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 font-extrabold text-kohl [&::-webkit-details-marker]:hidden">
                          Learn More →
                          <ChevronDown className="size-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="space-y-3 px-5 pb-5">
                          {s.more.map((m) => (
                            <li key={m} className="flex gap-3 leading-relaxed text-muted">
                              <Flower className="mt-1 size-4 shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </details>
                    </Reveal>
                  </div>
                </section>
                <div className="flex justify-center" aria-hidden>
                  <Vine length={3} className="h-28" />
                </div>
              </div>
            );
          })}

          {/* Step 7 — Buy */}
          <section id="buy" className="scroll-mt-40 py-10" aria-labelledby="buy-title">
            <Frame kind="leaves" className="shadow-[6px_6px_0_var(--kohl)]" innerClassName="bg-paper px-5 py-12 sm:px-12">
              <div className="text-center">
                <span className="font-display mx-auto grid size-16 place-items-center rounded-full border-[2.5px] border-kohl bg-haldi text-3xl shadow-[3px_3px_0_var(--kohl)]">7</span>
                <p className="mt-4 text-xs font-extrabold tracking-[0.22em] text-sindoor uppercase">Step 7 — Buy SwadUp</p>
                <h2 id="buy-title" className="font-display mt-3 text-4xl text-kohl sm:text-5xl">
                  Bring the journey home
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-lg text-muted">Enjoyed the story? Order SwadUp Premium Makhana from your favourite marketplace.</p>
              </div>
              <MarketplaceCards compact className="mt-10" />
            </Frame>
          </section>

          {site.youtube.channelId && (
            <section className="py-10">
              <Heading eyebrow="Live" title="Watch live from the farms" />
              <div className="mx-auto mt-8 max-w-4xl">
                <YouTubePlayer stage channelId={site.youtube.channelId} title="SwadUp — live from the farms" />
                <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
                  <Radio className="size-4 text-sindoor" /> Streams appear here whenever we&apos;re live.
                </p>
              </div>
            </section>
          )}
        </Container>
      </div>
    </>
  );
}
