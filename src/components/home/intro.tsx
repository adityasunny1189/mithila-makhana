import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { stats } from "@/lib/data";
import { Fish, Pearl } from "../art";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-pearl py-24 sm:py-32">
      <Fish className="pointer-events-none absolute -right-16 top-10 w-80 opacity-10" />
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="What is makhana?"
            title={
              <>
                A seed from a <em className="text-sindoor">thorny water lily</em>, popped into a cloud.
              </>
            }
            hindi="मखाना · फॉक्स नट · कमल गट्टा"
            intro={
              <>
                Makhana is the seed of <strong className="text-pond">Euryale ferox</strong>, a prickly water lily that grows in
                the still ponds of north Bihar. Roasted and popped by hand, the hard black seed turns into a crisp, white
                pearl — eaten as a snack, cooked into curries and kheer, and offered in prayer. Nearly 90% of the
                world&apos;s makhana comes from Bihar, and the Mithila crop carries a Geographical Indication tag.
              </>
            }
          />
          <Reveal delay={0.1}>
            <Link
              href="/about-makhana"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-sindoor underline decoration-2 underline-offset-8"
            >
              Everything about makhana
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={
                i === 0
                  ? "rounded-[2rem] bg-pond p-7 text-pearl"
                  : i === 3
                    ? "rounded-[2rem] bg-sindoor p-7 text-pearl"
                    : "rounded-[2rem] border border-pond/10 bg-cream p-7"
              }
            >
              <Pearl seed={i + 40} className="mb-6 size-10" />
              <p className="font-display text-5xl font-semibold tracking-tight">{s.value}</p>
              <p className={i === 0 || i === 3 ? "mt-2 text-cream/75" : "mt-2 text-muted"}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
