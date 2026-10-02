import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/data";
import { Lotus, Pearl } from "../art";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

const highlights = [processSteps[0], processSteps[3], processSteps[6], processSteps[7]];

export function ProcessTeaser() {
  return (
    <section className="relative overflow-hidden bg-pond py-24 text-pearl sm:py-32">
      <Lotus className="pointer-events-none absolute -bottom-10 -left-16 w-96 opacity-10" color="#fbf6ec" accent="#fbf6ec" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Farm to pack"
          title={
            <>
              Ten months, two roasts and <em className="text-haldi">one mighty pop.</em>
            </>
          }
          hindi="पोखर से थाली तक"
          intro="Makhana is one of the most labour-intensive crops on earth. Almost every step — from diving for seeds to popping them with a wooden mallet — is still done by hand."
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 right-0 left-0 hidden h-px border-t-2 border-dashed border-haldi/30 lg:block" />
          {highlights.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.1} className="relative">
              <div className="relative grid size-16 place-items-center rounded-full border-2 border-haldi bg-pond-deep font-display text-2xl text-haldi">
                {String(s.n).padStart(2, "0")}
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-haldi/80 uppercase">{s.when}</p>
              <h3 className="font-display mt-2 text-2xl font-semibold">{s.title}</h3>
              <p className="font-deva text-lg text-cream/50" lang="hi">
                {s.hindi}
              </p>
              <p className="mt-3 leading-relaxed text-cream/70">{s.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 flex flex-wrap items-center gap-6">
          <ButtonLink href="/farming" variant="light">
            See the full journey <ArrowRight className="size-4" />
          </ButtonLink>
          <div className="flex items-center gap-3 text-sm text-cream/60">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((s) => (
                <Pearl key={s} seed={s + 50} className="size-9" />
              ))}
            </div>
            Traditional pond & modern field methods
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
