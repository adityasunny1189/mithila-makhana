import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, nav } from "@/lib/site";
import { BorderBand, Fish, Lotus } from "../art";
import { Container } from "../ui/container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pond-deep text-cream/80">
      <BorderBand fill="#c2412d" color="#0d1c13" />
      <Fish className="pointer-events-none absolute -right-10 bottom-24 w-72 rotate-[-8deg] opacity-[0.07]" color="#fbf6ec" />
      <Lotus className="pointer-events-none absolute -left-10 top-20 w-64 opacity-[0.06]" color="#fbf6ec" accent="#fbf6ec" />
      <Container className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed text-cream/65">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {Object.entries(site.social).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cream/15 px-4 py-2 text-xs font-bold tracking-wide capitalize transition hover:border-haldi hover:text-haldi"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display mb-4 text-lg text-pearl">Explore</h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-haldi">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-4 text-lg text-pearl">For business</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/bulk" className="transition hover:text-haldi">
                Bulk & wholesale
              </Link>
            </li>
            <li>
              <Link href="/bulk#enquiry" className="transition hover:text-haldi">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/varieties" className="transition hover:text-haldi">
                Grades & specs
              </Link>
            </li>
            <li>
              <Link href="/live" className="transition hover:text-haldi">
                Book a live lot viewing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-4 text-lg text-pearl">Reach us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-haldi" />
              {site.contact.address}
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex gap-3 transition hover:text-haldi">
                <Mail className="mt-0.5 size-4 shrink-0 text-haldi" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex gap-3 transition hover:text-haldi">
                <Phone className="mt-0.5 size-4 shrink-0 text-haldi" />
                {site.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Grown in Mithila, Bihar.</p>
          <p className="font-deva text-sm" lang="hi">
            पग पग पोखर, माछ मखान
          </p>
        </Container>
      </div>
    </footer>
  );
}
