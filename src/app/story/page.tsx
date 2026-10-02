import type { Metadata } from "next";
import { story } from "@/lib/content";
import { Band, Frame } from "@/components/mithila/borders";
import { Eye, FishPair, Lotus, Peacock, Sun } from "@/components/mithila/motifs";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Our Story — Why SwadUp Foods?",
  description: "How SwadUp Foods started, what we believe, and why we care so much about bringing you quality makhana from Mithila.",
};

const art = [
  <Sun key="sun" className="w-full max-w-[260px]" />,
  <Eye key="eye" className="w-full max-w-[260px]" />,
  <FishPair key="fish" className="w-full max-w-[280px]" />,
  <Peacock key="peacock" className="w-full max-w-[300px]" />,
];
const bands = ["triangles", "leaves", "scallops", "triangles"] as const;
const bgs = ["bg-haldi/25", "bg-pearl", "bg-gulabi/15", "bg-leaf/10"];

export default function StoryPage() {
  return (
    <>
      <section className="paper filler relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <Lotus className="pointer-events-none absolute -bottom-6 -left-10 w-64 opacity-90 sm:w-80" />
        <Lotus className="pointer-events-none absolute -right-10 -bottom-6 w-64 opacity-90 sm:w-80" color="#f0b323" accent="#c8341f" />
        <Container className="relative pb-16">
          <Heading as="h1" eyebrow="Our story" title="Why SwadUp Foods?" hindi="स्वाद, सच्चाई और सेहत" intro={story.intro} />
        </Container>
      </section>
      <Band kind="triangles" />

      <section className="bg-pearl py-16 sm:py-24">
        <Container className="max-w-6xl space-y-16 sm:space-y-24">
          {story.sections.map((sec, i) => (
            <div key={sec.title} className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
              <Reveal className={i % 2 ? "md:order-2" : ""}>
                <Frame kind={bands[i]} className="mx-auto max-w-sm shadow-[6px_6px_0_var(--kohl)]">
                  <div className={`grid aspect-square place-items-center p-8 ${bgs[i]}`}>{art[i]}</div>
                </Frame>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-display text-5xl text-sindoor/30">0{i + 1}</p>
                <h2 className="font-display mt-1 text-4xl text-kohl sm:text-5xl">{sec.title}</h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                  {sec.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </Container>
      </section>

      <section className="paper filler py-20 text-center sm:py-28">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-kohl sm:text-4xl">
              “We only pack what we would happily serve at our own table.”
            </p>
            <p className="mt-4 font-extrabold tracking-[0.2em] text-sindoor uppercase">— Team SwadUp</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/journey" variant="secondary">
                See our journey
              </ButtonLink>
              <ButtonLink href="/buy">Buy Now</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
