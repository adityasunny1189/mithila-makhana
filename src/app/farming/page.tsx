import type { Metadata } from "next";
import { Droplets, Radio, RefreshCcw, Users } from "lucide-react";
import { methods, processSteps } from "@/lib/data";
import { Fish, LeafPad, Lotus, Pearl } from "@/components/art";
import { CtaBand } from "@/components/cta-band";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Farming & processing — farm to pack",
  description:
    "How makhana is farmed in Mithila's ponds and fields, harvested by divers and popped by hand — the full ten-step journey from pond to pack.",
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const calendar = [
  { label: "Sowing & nursery", spans: [[0, 1], [11, 12]], color: "bg-leaf" },
  { label: "Leaf growth", spans: [[1, 4]], color: "bg-pond" },
  { label: "Flowering", spans: [[3, 6]], color: "bg-[#8e4fa0]" },
  { label: "Harvest (diving)", spans: [[6, 10]], color: "bg-sindoor" },
  { label: "Roasting & popping", spans: [[7, 12], [0, 3]], color: "bg-haldi" },
];

const people = [
  {
    icon: Users,
    t: "Families, not factories",
    b: "Makhana is grown by smallholder families; skilled divers — many from the traditional Mallah fishing community — carry generations of pond knowledge.",
  },
  {
    icon: Droplets,
    t: "Wetlands that give back",
    b: "Makhana ponds double as fisheries and bird habitat, and need no tilling. Field farming lets farmers use waterlogged land that grows little else.",
  },
  {
    icon: RefreshCcw,
    t: "Fair, direct buying",
    b: "We buy gurri directly at the farm gate and pay on time — removing layers of middlemen so more value stays in the village.",
  },
];

export default function FarmingPage() {
  return (
    <>
      <PageHero
        eyebrow="Farm to pack"
        title={
          <>
            Grown in water. <em className="text-haldi">Popped by hand.</em>
          </>
        }
        hindi="पोखर से थाली तक"
        intro="Makhana is one of the few crops still harvested from the bottom of a pond. Follow its ten-month journey — from a seed in the mud to a crisp pearl in your pack."
        art={
          <div className="relative h-full">
            <LeafPad className="absolute top-0 right-10 w-56" />
            <LeafPad className="absolute right-48 bottom-0 w-40 rotate-90" color="#5d8a55" />
            <Lotus className="absolute top-10 right-0 w-36" color="#8e4fa0" accent="#c58bd4" />
          </div>
        }
      >
        <ButtonLink href="/live" variant="light">
          <Radio className="size-4" /> Watch it live
        </ButtonLink>
      </PageHero>

      {/* Methods */}
      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Two ways to farm"
            title={
              <>
                The ancient pond and <em className="text-sindoor">the modern field.</em>
              </>
            }
            intro="We source from both. Traditional ponds give us heritage, wild-grown makhana; field farming brings consistency and safer harvests."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {methods.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.1}
                className={`relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10 ${i === 0 ? "bg-pond text-pearl" : "border border-pond/10 bg-pearl"}`}
              >
                <LeafPad className={`pointer-events-none absolute -top-16 -right-16 w-64 ${i === 0 ? "opacity-30" : "opacity-15"}`} />
                <p className={`font-deva text-2xl ${i === 0 ? "text-haldi" : "text-sindoor"}`} lang="hi">
                  {m.hindi}
                </p>
                <h3 className="font-display mt-2 text-4xl font-semibold">{m.name}</h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className={`rounded-2xl p-4 ${i === 0 ? "bg-pond-deep/60" : "bg-cream"}`}>
                    <dt className="text-[11px] font-extrabold tracking-[0.2em] uppercase opacity-60">Water</dt>
                    <dd className="mt-1 font-semibold">{m.water}</dd>
                  </div>
                  <div className={`rounded-2xl p-4 ${i === 0 ? "bg-pond-deep/60" : "bg-cream"}`}>
                    <dt className="text-[11px] font-extrabold tracking-[0.2em] uppercase opacity-60">Cycle</dt>
                    <dd className="mt-1 font-semibold">{m.cycle}</dd>
                  </div>
                </dl>
                <ul className="mt-6 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <Pearl seed={p.length} className="mt-1 size-4 shrink-0" />
                      <span className={i === 0 ? "text-cream/80" : "text-muted"}>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Calendar */}
      <section className="bg-pearl py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="The makhana year" title="A crop calendar." hindi="मखान का साल" />
          <Reveal className="mt-12 overflow-x-auto rounded-[2rem] border border-pond/10 bg-cream p-6 sm:p-8">
            <div className="min-w-[720px]">
              <div className="grid grid-cols-[180px_repeat(12,1fr)] gap-y-3 text-xs font-bold tracking-wide text-muted uppercase">
                <span />
                {months.map((m) => (
                  <span key={m} className="text-center">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {calendar.map((row) => (
                  <div key={row.label} className="grid grid-cols-[180px_repeat(12,1fr)] items-center">
                    <span className="font-display pr-4 text-lg text-pond">{row.label}</span>
                    <div className="relative col-span-12 h-9 rounded-full bg-pond/5">
                      {row.spans.map(([s, e]) => (
                        <span
                          key={s}
                          className={`absolute inset-y-1 rounded-full ${row.color}`}
                          style={{ left: `calc(${(s / 12) * 100}% + 2px)`, width: `calc(${((e - s) / 12) * 100}% - 4px)` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Steps timeline */}
      <section className="relative overflow-hidden bg-pond py-24 text-pearl sm:py-32">
        <Fish className="pointer-events-none absolute top-40 -right-20 w-96 rotate-12 opacity-[0.07]" color="#fbf6ec" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="The ten steps"
            title={
              <>
                From the pond floor <em className="text-haldi">to your pack.</em>
              </>
            }
          />
          <ol className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute top-0 bottom-0 left-7 w-px border-l-2 border-dashed border-haldi/30 md:left-1/2" />
            {processSteps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal as="li" key={s.n} className="relative mb-12 grid gap-6 pl-20 md:grid-cols-2 md:gap-16 md:pl-0">
                  <span className="font-display absolute top-0 left-0 z-10 grid size-14 place-items-center rounded-full border-2 border-haldi bg-pond-deep text-xl text-haldi md:left-1/2 md:-translate-x-1/2">
                    {String(s.n).padStart(2, "0")}
                  </span>
                  <div className={right ? "md:col-start-2" : "md:pr-12 md:text-right"}>
                    <p className="text-xs font-bold tracking-[0.2em] text-haldi/80 uppercase">{s.when}</p>
                    <h3 className="font-display mt-2 text-3xl font-semibold">{s.title}</h3>
                    <p className="font-deva text-xl text-cream/45" lang="hi">
                      {s.hindi}
                    </p>
                    <p className="mt-3 leading-relaxed text-cream/70">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* People */}
      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="People & planet"
            title={
              <>
                Every pearl is <em className="text-sindoor">someone&apos;s livelihood.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {people.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="rounded-[2rem] bg-pearl p-8">
                <span className="grid size-14 place-items-center rounded-2xl bg-sindoor/10 text-sindoor">
                  <p.icon className="size-7" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold text-pond">{p.t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
