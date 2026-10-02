import { ArrowRight } from "lucide-react";
import { snacks } from "@/lib/data";
import { SnackPack } from "../snack-pack";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function SnacksTeaser() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/3 left-1/2 size-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(227,168,43,0.25),transparent_60%)]" />
      <Container className="relative">
        <SectionHeading
          align="center"
          eyebrow="Coming soon · Snacks"
          title={
            <>
              Our makhana, <em className="text-sindoor">roasted for your pantry.</em>
            </>
          }
          intro="A range of slow-roasted, small-batch makhana snacks — made with the same pond-fresh pearls we supply to the trade."
        />
        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {snacks.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className={i % 2 ? "lg:translate-y-10" : ""}>
              <div className="transition-transform duration-500 hover:-translate-y-3 hover:-rotate-2">
                <SnackPack snack={s} index={i} />
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-muted">{s.notes}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 text-center">
          <ButtonLink href="/snacks" variant="secondary">
            Join the snack waitlist <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
