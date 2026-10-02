import type { Metadata } from "next";
import { grades } from "@/lib/data";
import { Pearl } from "@/components/art";
import { CtaBand } from "@/components/cta-band";
import { GradeCard } from "@/components/grade-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Makhana grades & varieties",
  description: "Jumbo, premium, standard and phool makhana grades, raw gurri seed and makhana flour — sizes, pop rates and best uses for bulk buyers.",
};

const popped = grades.filter((g) => g.pop > 0);

const specs = [
  ["Moisture", "≤ 7%", "Checked on every lot before packing"],
  ["Foreign matter", "≤ 0.5%", "Hand-sorted, sieved and aspirated"],
  ["Black / husk patches", "Grade-dependent", "Lower on Jumbo & Premium"],
  ["Shelf life", "6–9 months", "In sealed, food-grade packaging"],
  ["Origin", "Mithila, Bihar", "GI-tagged region, lot-wise traceability"],
];

const steps = [
  { t: "Sieve", b: "Brass and bamboo sieves separate pops by suta diameter." },
  { t: "Sort", b: "Trained hands remove splits, under-pops and dark pieces." },
  { t: "Test", b: "Moisture and pop-rate are measured and logged per lot." },
  { t: "Seal", b: "Packed and sealed with the lot number on every bag." },
];

export default function VarietiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Grades & varieties"
        title={
          <>
            From jumbo pearls to <em className="text-haldi">stone-milled atta.</em>
          </>
        }
        hindi="राजा · हीरा · मोती · फूल"
        intro="Makhana is traded by size, measured in suta — a traditional unit of about 1/8 inch. Bigger, whiter pops command a premium; smaller grades are perfect for cooking and processing."
      />

      {/* Size scale */}
      <section className="grain bg-cream py-20 sm:py-24">
        <Container>
          <Reveal className="rounded-[2.5rem] border border-pond/10 bg-pearl p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.2em] text-sindoor uppercase">Actual size guide (approx.)</p>
            <div className="mt-10 flex flex-wrap items-end justify-around gap-8">
              {popped.map((g) => (
                <div key={g.slug} className="flex flex-col items-center gap-4">
                  <Pearl seed={g.sizeMm + 1} className="drop-shadow-xl" style={{ width: g.sizeMm * 5, height: g.sizeMm * 5 }} />
                  <div className="text-center">
                    <p className="font-display text-xl font-semibold text-pond">{g.name}</p>
                    <p className="text-sm text-muted">
                      {g.size} · ~{g.sizeMm} mm
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 h-3 rounded-full bg-[repeating-linear-gradient(90deg,var(--pond)_0_2px,transparent_2px_20px)] opacity-30" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream pb-24 sm:pb-32">
        <Container>
          <SectionHeading eyebrow="The range" title="Six products, one source." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grades.map((g, i) => (
              <Reveal key={g.slug} delay={(i % 3) * 0.08}>
                <GradeCard grade={g} detailed />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Specs */}
      <section className="bg-pond py-24 text-pearl sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Quality specs"
              title={
                <>
                  Every bag, <em className="text-haldi">to the same spec.</em>
                </>
              }
              intro="Our trade specs are shared with every quote. Need a custom spec for your brand? We'll grade to it."
            />
            <ol className="mt-12 grid grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.t} delay={i * 0.08} className="rounded-3xl border border-cream/10 p-6">
                  <span className="font-display text-3xl text-haldi">0{i + 1}</span>
                  <h3 className="font-display mt-3 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-cream/65">{s.b}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1} className="overflow-hidden rounded-[2rem] bg-pearl text-ink">
            <table className="w-full text-left">
              <thead className="bg-cream-deep">
                <tr>
                  <th className="px-6 py-4 text-xs font-extrabold tracking-[0.15em] uppercase">Parameter</th>
                  <th className="px-6 py-4 text-xs font-extrabold tracking-[0.15em] uppercase">Standard</th>
                  <th className="hidden px-6 py-4 text-xs font-extrabold tracking-[0.15em] uppercase sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([p, v, n]) => (
                  <tr key={p} className="border-t border-pond/10">
                    <td className="px-6 py-5 font-bold text-pond">{p}</td>
                    <td className="font-display px-6 py-5 text-lg">{v}</td>
                    <td className="hidden px-6 py-5 text-sm text-muted sm:table-cell">{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>
      <CtaBand title="Not sure which grade fits your product?" body="Send us what you're making — snacks, sweets, flour or exports — and we'll recommend a grade and ship a sample." />
    </>
  );
}
