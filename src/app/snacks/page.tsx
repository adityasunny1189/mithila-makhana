import type { Metadata } from "next";
import { Flame, Leaf, Wheat } from "lucide-react";
import { snacks } from "@/lib/data";
import { BorderBand, Pearl, Sun } from "@/components/art";
import { WaitlistForm } from "@/components/forms/waitlist-form";
import { SnackPack } from "@/components/snack-pack";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Makhana snacks — coming soon",
  description: "Slow-roasted, small-batch makhana snacks made from GI-tagged Mithila makhana. Join the waitlist.",
};

const promises = [
  { icon: Flame, t: "Roasted, never fried", b: "Slow-roasted in small batches with a little ghee or cold-pressed oil." },
  { icon: Wheat, t: "Gluten-free, always", b: "Just makhana, real spices and nothing you can't pronounce." },
  { icon: Leaf, t: "Traceable to the pond", b: "Every pack carries the village and harvest its makhana came from." },
];

export default function SnacksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sindoor pt-36 text-pearl sm:pt-44">
        <Sun className="animate-spin-slow pointer-events-none absolute -top-24 -left-24 w-96 opacity-20" />
        <Container className="relative grid items-center gap-14 pb-24 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="inline-flex rounded-full bg-pearl/15 px-4 py-1.5 text-xs font-extrabold tracking-[0.2em] uppercase">
              Coming soon
            </span>
            <h1 className="font-display mt-6 text-5xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Crunch, <em className="text-haldi">the Mithila way.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-pearl/80">
              We&apos;ve spent years supplying the makhana inside other brands&apos; packs. Now we&apos;re roasting our own — from the
              same ponds, with flavours from home.
            </p>
            <div className="mt-10">
              <WaitlistForm />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative grid grid-cols-2 gap-5">
            {snacks.map((s, i) => (
              <div key={s.name} className={i % 2 ? "translate-y-10 rotate-3" : "-rotate-3"}>
                <SnackPack snack={s} index={i} className="transition-transform duration-500 hover:-translate-y-3" />
              </div>
            ))}
          </Reveal>
        </Container>
        <BorderBand fill="#e3a82b" color="#7a2416" />
      </section>

      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading align="center" eyebrow="The first four" title="Flavours from home." hindi="घर का स्वाद" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {snacks.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="rounded-[2rem] p-7" style={{ background: s.hue }}>
                  <Pearl seed={i + 90} className="size-14" />
                  <p className="mt-6 text-xs font-extrabold tracking-[0.2em] uppercase" style={{ color: s.accent }}>
                    {s.flavour}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold text-ink">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{s.notes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-pond py-24 text-pearl sm:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="rounded-[2rem] border border-cream/10 p-8">
                <p.icon className="size-8 text-haldi" />
                <h3 className="font-display mt-6 text-2xl font-semibold">{p.t}</h3>
                <p className="mt-2 leading-relaxed text-cream/70">{p.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-col items-center gap-6 rounded-[2.5rem] bg-sindoor px-6 py-14 text-center">
            <h2 className="font-display max-w-2xl text-4xl font-semibold text-balance sm:text-5xl">Be the first to taste the first batch.</h2>
            <WaitlistForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
