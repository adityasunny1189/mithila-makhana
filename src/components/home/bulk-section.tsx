import { ArrowRight, Check } from "lucide-react";
import { bulkFeatures, buyerTypes } from "@/lib/data";
import { Icon } from "../icon";
import { Marquee } from "../ui/marquee";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function BulkSection() {
  return (
    <section className="grain overflow-hidden bg-cream pt-24 sm:pt-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Bulk & wholesale"
              title={
                <>
                  Village-sourced. <em className="text-sindoor">Brand-ready.</em>
                </>
              }
              intro="From 100 kg sample lots to full-truck loads, we supply snack brands, retailers, exporters and kitchens with makhana graded exactly to spec."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {buyerTypes.map((b) => (
                  <li key={b} className="flex items-center gap-3 font-semibold text-pond">
                    <span className="grid size-6 place-items-center rounded-full bg-leaf/15 text-leaf">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/bulk#enquiry">
                  Request a quote <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="/bulk" variant="ghost">
                  How bulk supply works
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {bulkFeatures.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.08}
                className="rounded-[2rem] border border-pond/10 bg-pearl p-7 shadow-[0_20px_50px_-35px_rgba(31,61,43,0.6)] sm:even:translate-y-10"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-pond text-haldi">
                  <Icon name={f.icon} className="size-6" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold text-pond">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
      <div className="mt-24 -rotate-1 bg-sindoor py-5 text-pearl sm:mt-32">
        <Marquee items={["Grown in ponds", "Popped by hand", "GI-tagged origin", "Graded to spec", "Fair to farmers", "Packed in Darbhanga"]} />
      </div>
    </section>
  );
}
