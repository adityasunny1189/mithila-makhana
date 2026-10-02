import { ArrowRight } from "lucide-react";
import { grades } from "@/lib/data";
import { GradeCard } from "../grade-card";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function VarietiesPreview() {
  return (
    <section className="grain bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Grades & varieties"
            title={
              <>
                Graded by the <em className="text-sindoor">suta</em>, the old Mithila measure.
              </>
            }
            intro="Every lot is sieved and hand-sorted by size, colour and pop rate — so a brand gets the same pearl in every bag."
          />
          <Reveal>
            <ButtonLink href="/varieties" variant="secondary">
              All grades & specs <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {grades.slice(0, 4).map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <GradeCard grade={g} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
