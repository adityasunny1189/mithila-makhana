import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Plus } from "lucide-react";
import { bulkFeatures, buyerTypes, faqs, packOptions } from "@/lib/data";
import { site } from "@/lib/site";
import { Pearl } from "@/components/art";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Icon } from "@/components/icon";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Bulk & wholesale makhana",
  description:
    "Buy GI-tagged Mithila makhana in bulk — graded to spec, private-label packing, pan-India dispatch and export support. Request a quote.",
};

const journey = [
  { t: "Tell us your need", b: "Grade, volume, packing and destination — via the form, email or WhatsApp." },
  { t: "Quote & sample", b: "Lot-wise pricing within a working day, and a courier sample on request." },
  { t: "Watch your lot live", b: "Inspect your makhana on a live video call from our packing floor." },
  { t: "Packed & dispatched", b: "Sealed, labelled with lot numbers and shipped with a quality sheet." },
];

export default function BulkPage() {
  return (
    <>
      <PageHero
        eyebrow="Bulk & wholesale"
        title={
          <>
            Makhana by the <em className="text-haldi">tonne,</em> sourced by the village.
          </>
        }
        hindi="थोक व्यापार"
        intro="We supply snack brands, retailers, exporters and food businesses with consistent, traceable makhana — straight from the farming families of Mithila."
      >
        <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-sindoor px-6 py-3.5 text-sm font-bold text-pearl transition hover:bg-sindoor-deep">
          Request a quote
        </a>
      </PageHero>

      {/* Journey */}
      <section className="grain bg-cream py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="How it works" title="Four steps from enquiry to delivery." />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal as="li" key={j.t} delay={i * 0.08} className="relative rounded-[2rem] bg-pearl p-7">
                <span className="font-display text-6xl font-semibold text-sindoor/20">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl font-semibold text-pond">{j.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{j.b}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-20 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {bulkFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06} className="rounded-[2rem] border border-pond/10 bg-pearl p-7">
                  <Icon name={f.icon} className="size-7 text-sindoor" />
                  <h3 className="font-display mt-4 text-xl font-semibold text-pond">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="rounded-[2rem] bg-pond p-8 text-pearl">
              <h3 className="font-display text-3xl font-semibold">Packing options</h3>
              <ul className="mt-6 space-y-4">
                {packOptions.map((p, i) => (
                  <li key={p.name} className="flex items-center gap-5 rounded-2xl bg-pond-deep/60 p-5">
                    <Pearl seed={i + 70} className="size-12 shrink-0" />
                    <div>
                      <p className="font-display text-xl">{p.name}</p>
                      <p className="text-sm text-cream/65">
                        {p.size} · {p.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-bold tracking-[0.2em] text-haldi uppercase">We supply</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {buyerTypes.map((b) => (
                  <span key={b} className="rounded-full border border-cream/20 px-3 py-1 text-xs font-semibold">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-24 bg-cream-deep py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading
              eyebrow="Request a quote"
              title={
                <>
                  Let&apos;s talk <em className="text-sindoor">makhana.</em>
                </>
              }
              intro="Share a few details and our trade desk in Darbhanga will get back with pricing, availability and sample options."
            />
            <Reveal delay={0.1} className="mt-10 space-y-3">
              {[
                { icon: Mail, label: site.contact.email, href: `mailto:${site.contact.email}` },
                { icon: Phone, label: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
                { icon: MessageCircle, label: "Chat on WhatsApp", href: `https://wa.me/${site.contact.whatsapp}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-pearl px-5 py-4 font-semibold text-pond transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-sindoor/10 text-sindoor">
                    <c.icon className="size-5" />
                  </span>
                  {c.label}
                </a>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <EnquiryForm />
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-pearl py-24 sm:py-32">
        <Container className="max-w-4xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Questions buyers ask us." />
          <div className="mt-12 divide-y divide-pond/10 border-y border-pond/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold text-pond sm:text-2xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="size-6 shrink-0 text-sindoor transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
