import Link from "next/link";
import { ArrowRight, QrCode, ShoppingBag } from "lucide-react";
import { differentiators, journeySteps, story } from "@/lib/content";
import { site } from "@/lib/site";
import { Band, Frame } from "@/components/mithila/borders";
import { FishPair, Lotus, Makhana, Peacock, Sun } from "@/components/mithila/motifs";
import { PackFront } from "@/components/mithila/pack";
import { PackBack } from "@/components/mithila/pack-back";
import { Scene } from "@/components/mithila/scenes";
import { MarketplaceCards } from "@/components/shared/marketplace-cards";
import { MotifBadge } from "@/components/shared/motif-badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="paper filler relative overflow-hidden pt-28 sm:pt-36">
        <Container className="relative text-center">
          <Reveal>
            <p className="font-display text-xl text-sindoor" lang="hi">
              {site.taglineHindi}
            </p>
            <h1 className="font-display mt-2 text-[3.4rem] leading-none text-kohl sm:text-8xl lg:text-[8.5rem]">
              <span className="text-sindoor">SWAD</span>UP
              <span className="mt-1 block text-[0.42em] tracking-[0.35em] text-kohl/85">FOODS</span>
            </h1>
            <p className="font-display mt-6 text-3xl text-leaf sm:text-4xl">{site.tagline}</p>
            <p className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base font-bold text-muted sm:text-lg">
              <span>Premium Makhana</span>
              <span className="text-sindoor">✦</span>
              <span>Carefully Selected</span>
              <span className="text-sindoor">✦</span>
              <span>Packed with Care</span>
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/journey" variant="secondary">
                Discover Our Journey <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href="/buy">
                <ShoppingBag className="size-4" /> Buy Now
              </ButtonLink>
            </div>
          </Reveal>

          {/* painted stage with the 200g pack */}
          <Reveal delay={0.15} className="relative mx-auto mt-14 h-[420px] max-w-4xl sm:h-[520px]">
            <Sun className="animate-spin-slow absolute top-0 left-1/2 w-[300px] -translate-x-1/2 opacity-95 sm:w-[400px]" />
            <Peacock className="animate-sway absolute bottom-6 -left-24 w-56 origin-bottom sm:left-0 sm:w-80" />
            <Peacock className="animate-sway absolute -right-24 bottom-6 w-56 origin-bottom -scale-x-100 sm:right-0 sm:w-80" />
            <Lotus className="absolute bottom-0 left-1/2 w-72 -translate-x-1/2 sm:w-96" />
            <div className="absolute bottom-16 left-1/2 w-[180px] -translate-x-1/2 drop-shadow-[8px_10px_0_rgba(27,20,16,0.85)] sm:bottom-20 sm:w-[230px]">
              <PackFront className="animate-float w-full" />
            </div>
            <Makhana className="animate-float-slow absolute top-[38%] left-[22%] w-12 sm:w-16" variant={0} />
            <Makhana className="animate-float absolute top-[30%] right-[22%] w-10 sm:w-14" variant={1} />
            <Makhana className="animate-float-slow absolute top-[56%] right-[30%] w-8 sm:w-11" variant={2} />
          </Reveal>
        </Container>
        <Band kind="triangles" />
      </section>

      {/* ---------- What makes us different ---------- */}
      <section className="bg-pearl py-20 sm:py-28">
        <Container>
          <Heading eyebrow="Our promise" title="What Makes SwadUp Foods Different?" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="double-line h-full rounded-[1.75rem] bg-paper p-7 pt-8 text-center">
                  <MotifBadge motif={d.motif} className="mx-auto" />
                  <h3 className="font-display mt-5 text-2xl text-kohl">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Journey preview ---------- */}
      <section className="paper relative overflow-hidden bg-paper-deep py-20 sm:py-28">
        <Band kind="leaves" className="absolute top-0" />
        <Container>
          <Heading
            eyebrow="From farm to your home"
            title="The Journey of Your Makhana"
            intro="From the water fields to your home — discover every step behind your SwadUp Makhana."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((s, i) => (
              <Reveal as="li" key={s.key} delay={(i % 3) * 0.08}>
                <Link href={`/journey#${s.key}`} className="group block">
                  <Frame kind={i % 2 ? "scallops" : "triangles"} className="shadow-[5px_5px_0_var(--kohl)] transition-transform duration-300 group-hover:-translate-y-1.5">
                    <div className="aspect-[4/3]">
                      <Scene name={s.key} className="size-full" />
                    </div>
                  </Frame>
                  <div className="mt-4 flex items-baseline gap-3 px-1">
                    <span className="font-display text-3xl text-sindoor">{String(s.n).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-2xl text-kohl">{s.label}</h3>
                      <p className="text-muted">{s.title}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-14 text-center">
            <ButtonLink href="/journey" variant="secondary">
              Discover Our Journey <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      {/* ---------- QR on the pack ---------- */}
      <section className="relative overflow-hidden bg-sindoor py-20 text-pearl sm:py-28">
        <FishPair className="pointer-events-none absolute -top-10 -left-16 w-72 opacity-25" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="mx-auto w-full max-w-[300px]">
            <PackBack className="w-full -rotate-3 drop-shadow-[10px_12px_0_rgba(27,20,16,0.9)]" />
          </Reveal>
          <div>
            <Heading
              align="left"
              tone="dark"
              eyebrow="Scan the QR on your pack"
              title="Every pack tells its story."
              intro="Scan the QR code on your SwadUp 200g pack to see exactly how your makhana was farmed, harvested, cleaned, processed, checked and packed."
            />
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/journey" variant="light">
                <QrCode className="size-4" /> See the journey
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- Story teaser ---------- */}
      <section className="paper filler py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Heading align="left" eyebrow="Our story" title="Why SwadUp Foods?" intro={story.intro} />
            <Reveal delay={0.1} className="mt-8">
              <ButtonLink href="/story" variant="outline">
                Read our story <ArrowRight className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Frame kind="leaves" className="mx-auto max-w-md shadow-[6px_6px_0_var(--kohl)]">
              <div className="grid aspect-square place-items-center bg-pearl p-6">
                <FishPair className="w-full max-w-sm" />
              </div>
            </Frame>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Where to buy ---------- */}
      <section className="bg-pearl py-20 sm:py-28">
        <Band kind="dots" className="-mt-20 mb-20 sm:-mt-28 sm:mb-28" />
        <Container>
          <Heading eyebrow="Buy now" title="Get SwadUp delivered home" intro="Choose your preferred marketplace." />
          <MarketplaceCards className="mt-14" />
        </Container>
      </section>
    </>
  );
}
