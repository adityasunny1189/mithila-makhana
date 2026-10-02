import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Frame } from "@/components/mithila/borders";
import { Fish, Lotus } from "@/components/mithila/motifs";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SwadUp Foods — email, phone or send us a message.",
};

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Address", value: site.contact.address, href: null },
  ];
  return (
    <section className="paper filler relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Fish className="pointer-events-none absolute top-32 -right-16 w-64 rotate-12 opacity-80" />
      <Container className="relative">
        <Heading as="h1" eyebrow="Contact us" title="Get in Touch" intro="Questions, feedback or bulk orders — we'd love to hear from you." />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="double-line h-full rounded-[1.75rem] bg-pearl p-8">
              <h2 className="font-display text-3xl text-sindoor">{site.name}</h2>
              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-kohl bg-haldi">
                      <d.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold tracking-[0.2em] text-muted uppercase">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="font-bold text-kohl hover:text-sindoor">
                          {d.value}
                        </a>
                      ) : (
                        <p className="font-bold text-kohl">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Lotus className="mx-auto mt-10 w-48" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Frame kind="leaves" className="shadow-[6px_6px_0_var(--kohl)]" innerClassName="bg-pearl">
              <ContactForm />
            </Frame>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
