import type { Metadata } from "next";
import { benefits, nutrition } from "@/lib/data";
import { Fish, LeafPad, Lotus, Pearl } from "@/components/art";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Makhana 101 — what is makhana?",
  description:
    "What makhana (fox nut) is, how the Euryale ferox plant grows in Mithila's ponds, its nutrition, cultural significance and the GI tag.",
};

const anatomy = [
  {
    k: "The plant",
    t: "Euryale ferox",
    b: "A water lily with enormous, thorny, floating leaves that can grow beyond a metre across. It thrives in the still, warm ponds and wetlands of north Bihar.",
    art: <LeafPad className="w-32" />,
  },
  {
    k: "The seed",
    t: "Gurri",
    b: "Each spiky fruit holds dozens of pea-sized black seeds. When ripe, the fruit bursts and the seeds sink to the pond floor, where divers collect them.",
    art: (
      <div className="flex flex-wrap justify-center gap-2 w-32">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className="size-7 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6d5a4a,#1a120c_70%)]" />
        ))}
      </div>
    ),
  },
  {
    k: "The pop",
    t: "Makhana",
    b: "Roasted twice and struck with a wooden mallet, the hard shell cracks and the starchy kernel puffs into the white, airy pearl we know as makhana.",
    art: <Pearl seed={17} className="w-28 drop-shadow-xl" />,
  },
];

const names = [
  ["Makhana", "Hindi / Maithili"],
  ["Fox nut", "English"],
  ["Gorgon nut", "English"],
  ["Phool makhana", "Popped form"],
  ["Qian shi", "Chinese"],
  ["Lotus seed", "Common misnomer"],
];

const ways = [
  { t: "Roasted snack", b: "Tossed in ghee with salt and pepper — the original guilt-free crunch." },
  { t: "Makhana kheer", b: "Simmered in milk with cardamom and jaggery; a festival favourite." },
  { t: "Makhana matar", b: "Added to rich gravies where it soaks up flavour like a sponge." },
  { t: "Vrat food", b: "Grain-free and sattvik, makhana is eaten during fasts across India." },
  { t: "Flour & baking", b: "Milled into gluten-free atta for laddoos, cookies and baby food." },
  { t: "Trail mixes", b: "A light, protein-rich base for granolas, bars and snack mixes." },
];

export default function AboutMakhanaPage() {
  return (
    <>
      <PageHero
        eyebrow="Makhana 101"
        title={
          <>
            Everything about the <em className="text-haldi">fox nut.</em>
          </>
        }
        hindi="मखाना क्या है?"
        intro="Makhana is the popped seed of a thorny water lily, grown for centuries in the ponds of Mithila. Here's what it is, why it's so good for you, and why Mithila's makhana is special."
        art={<Lotus className="ml-auto w-80" color="#8e4fa0" accent="#c58bd4" />}
      />

      {/* Anatomy */}
      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="From pond to pearl"
            title="One plant, three forms."
            intro="Makhana is sometimes called a 'lotus seed', but it comes from a different plant altogether — Euryale ferox, the prickly water lily."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {anatomy.map((a, i) => (
              <Reveal key={a.k} delay={i * 0.1} className="relative rounded-[2rem] border border-pond/10 bg-pearl p-8">
                <span className="font-display absolute top-6 right-8 text-7xl font-semibold text-pond/5">{i + 1}</span>
                <div className="grid h-40 place-items-center">{a.art}</div>
                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-sindoor uppercase">{a.k}</p>
                <h3 className="font-display mt-2 text-3xl font-semibold text-pond italic">{a.t}</h3>
                <p className="mt-3 leading-relaxed text-muted">{a.b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap gap-3">
            {names.map(([n, l]) => (
              <span key={n} className="rounded-full border border-pond/15 bg-pearl px-5 py-2.5">
                <span className="font-display text-lg text-pond">{n}</span>
                <span className="ml-2 text-xs font-semibold tracking-wide text-muted uppercase">{l}</span>
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Nutrition */}
      <section className="bg-pond py-24 text-pearl sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Nutrition"
              title={
                <>
                  Small pearl, <em className="text-haldi">big goodness.</em>
                </>
              }
              intro="Makhana is naturally gluten-free, low in fat and rich in fibre, plant protein and minerals — which is why it has become a favourite of health-food and snack brands."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.08} className="rounded-3xl border border-cream/10 bg-pond-deep/60 p-6">
                  <Icon name={b.icon} className="size-7 text-haldi" />
                  <h3 className="font-display mt-4 text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{b.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border-[3px] border-ink bg-pearl p-8 text-ink shadow-2xl sm:p-10">
              <div className="border-b-8 border-ink pb-3">
                <h3 className="font-display text-4xl font-bold">Nutrition facts</h3>
                <p className="mt-1 text-sm text-muted">Popped makhana · per 100 g (approx.)</p>
              </div>
              <dl>
                {nutrition.map((n, i) => (
                  <div
                    key={n.label}
                    className={`flex justify-between py-3 ${i === 0 ? "border-b-4 border-ink" : "border-b border-ink/15"}`}
                  >
                    <dt className={i === 0 ? "text-xl font-extrabold" : "font-semibold"}>{n.label}</dt>
                    <dd className={i === 0 ? "text-xl font-extrabold" : "font-semibold"}>{n.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Values are indicative and vary by lot, grade and roasting. Lab reports are shared with every bulk order.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Culture & GI */}
      <section className="relative overflow-hidden bg-pearl py-24 sm:py-32">
        <Fish className="pointer-events-none absolute -left-10 bottom-10 w-72 opacity-15" />
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Mithila & makhana"
            title={
              <>
                Pond, fish and makhana — <em className="text-sindoor">the identity of Mithila.</em>
              </>
            }
            hindi="पग पग पोखर, माछ मखान, सरस बोल, मुस्की मुख पान"
            intro="An old Maithili saying describes the land as having 'a pond at every step, fish and makhana'. Makhana is offered during Chhath, shared with paan during the Kojagara celebrations of newly-weds, and served at weddings across the region."
          />
          <div className="grid gap-5">
            {[
              {
                y: "2022",
                t: "GI tag for Mithila Makhana",
                b: "Makhana grown in the Mithila region received a Geographical Indication tag, recognising its origin and traditional know-how.",
              },
              {
                y: "~90%",
                t: "Of the world's makhana",
                b: "Bihar produces the vast majority of the world's makhana, centred on Darbhanga, Madhubani, Purnia, Katihar, Saharsa and Supaul.",
              },
              {
                y: "2025",
                t: "A Makhana Board for Bihar",
                b: "The Union Budget announced a dedicated board to support makhana farmers with processing, value addition and market access.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08} className="flex gap-6 rounded-[2rem] border border-pond/10 bg-cream p-6">
                <span className="font-display w-24 shrink-0 text-4xl font-semibold text-sindoor">{x.y}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-pond">{x.t}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Ways to eat */}
      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading align="center" eyebrow="In the kitchen" title="Six ways India eats makhana." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ways.map((w, i) => (
              <Reveal key={w.t} delay={(i % 3) * 0.08} className="group flex items-start gap-5 rounded-[2rem] bg-pearl p-7 transition hover:-translate-y-1">
                <Pearl seed={i + 60} className="size-14 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-pond">{w.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{w.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
