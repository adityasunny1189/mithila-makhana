import { ArrowRight, Play } from "lucide-react";
import { BorderBand, LeafPad, Lotus, Pearl, Sun } from "../art";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-cream pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 -right-40 size-[40rem] rounded-full bg-haldi/20 blur-3xl" />
      <Container className="relative grid grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-sindoor/25 bg-pearl px-4 py-1.5 text-xs font-bold tracking-wide text-sindoor">
            <span className="size-1.5 rounded-full bg-sindoor" />
            GI-tagged Mithila Makhana · Direct from village ponds
          </span>
          <h1 className="font-display mt-6 text-[2.75rem] leading-[0.95] font-semibold tracking-tight text-pond text-balance sm:text-7xl lg:text-[5.6rem]">
            The pearl of <span className="text-sindoor italic">Mithila&apos;s</span> ponds.
          </h1>
          <p className="font-deva mt-4 text-2xl text-husk/70" lang="hi">
            पग पग पोखर, माछ मखान
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Hand-harvested by diving farmers, sun-dried and popped over iron pans in the villages of Darbhanga and Madhubani.
            We bring that makhana — graded, clean and traceable — to brands, retailers and kitchens in bulk.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/bulk">
              Get bulk pricing
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/live" variant="ghost">
              <Play className="size-4 fill-current" />
              Watch the farms live
            </ButtonLink>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-pond/10 pt-6">
            {[
              ["~9.7g", "protein / 100g"],
              ["<0.5g", "fat / 100g"],
              ["100%", "pond to pack"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-semibold text-pond">{v}</dt>
                <dd className="mt-1 text-xs font-semibold tracking-wide text-muted uppercase">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-[560px]">
          <Sun className="animate-spin-slow absolute -top-6 -right-4 w-36 opacity-90 sm:w-44" />
          {/* the pond */}
          <div className="absolute inset-[6%] overflow-hidden rounded-full border-[3px] border-ink bg-[radial-gradient(circle_at_40%_35%,#2f5a3f,#142a1d_75%)] shadow-[0_50px_100px_-40px_rgba(20,42,29,0.9)]">
            <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_60%_60%,transparent_0_22px,rgba(169,199,154,0.07)_22px_24px)]" />
            <LeafPad className="absolute -top-[6%] -left-[8%] w-[52%] rotate-12" />
            <LeafPad className="absolute right-[-10%] bottom-[-4%] w-[58%] -rotate-45" color="#5d8a55" />
            <LeafPad className="absolute top-[52%] left-[4%] w-[30%] rotate-90" color="#3f6b38" />
            <Lotus className="absolute top-[18%] right-[10%] w-[34%] drop-shadow-xl" color="#8e4fa0" accent="#c58bd4" />
          </div>
          <div className="absolute inset-[6%] rounded-full outline-2 outline-offset-8 outline-ink/40 outline-dashed" />
          {/* floating pearls */}
          {[
            { c: "top-[46%] left-[34%] w-[26%]", s: 4, a: "animate-float" },
            { c: "top-[64%] left-[52%] w-[17%]", s: 9, a: "animate-float-slow" },
            { c: "top-[28%] left-[12%] w-[14%]", s: 13, a: "animate-float-slow" },
            { c: "bottom-[2%] left-[14%] w-[20%]", s: 21, a: "animate-float" },
            { c: "top-[2%] left-[40%] w-[12%]", s: 31, a: "animate-float" },
          ].map((p) => (
            <Pearl key={p.s} seed={p.s} className={`absolute ${p.c} ${p.a} drop-shadow-[0_18px_18px_rgba(0,0,0,0.35)]`} />
          ))}
          <div className="absolute bottom-[10%] -right-2 rotate-3 rounded-2xl border-2 border-ink bg-pearl px-4 py-3 shadow-xl sm:right-0">
            <p className="text-[10px] font-extrabold tracking-[0.2em] text-sindoor uppercase">Harvest 2026</p>
            <p className="font-display text-lg font-semibold text-pond">Now grading · 6+ suta</p>
          </div>
        </Reveal>
      </Container>
      <BorderBand />
    </section>
  );
}
