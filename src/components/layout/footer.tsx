import Link from "next/link";
import { marketplaces, site } from "@/lib/site";
import { Band } from "../mithila/borders";
import { Fish, Peacock } from "../mithila/motifs";
import { Container } from "../ui/container";
import { LogoMark } from "./logo";
import { SocialLinks } from "./social";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Our Journey" },
  { href: "/story", label: "Our Story" },
  { href: "/product", label: "Our Product" },
  { href: "/buy", label: "Buy Now" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-kohl text-paper/85">
      <Band kind="triangles" />
      <Peacock className="pointer-events-none absolute -right-10 -bottom-6 hidden w-64 opacity-[0.12] lg:block" />
      <Fish className="pointer-events-none absolute -left-10 top-24 w-56 -rotate-12 opacity-10" />
      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-14" />
            <div>
              <p className="font-display text-3xl text-haldi">{site.wordmark}</p>
              <p className="text-sm font-bold tracking-[0.15em] text-paper/70 uppercase">{site.tagline}</p>
            </div>
          </div>
          <p className="font-display mt-5 text-lg text-paper/60" lang="hi">
            {site.taglineHindi}
          </p>
        </div>
        <div>
          <h3 className="font-display mb-4 text-xl text-haldi">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-haldi">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-4 text-xl text-haldi">Shop</h3>
          <ul className="space-y-2.5">
            {marketplaces.map((m) => (
              <li key={m.key}>
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-haldi">
                    {m.name}
                  </a>
                ) : (
                  <span className="text-paper/55">{m.name} – Coming Soon</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display mb-4 text-xl text-haldi">Follow SwadUp</h3>
          <SocialLinks />
        </div>
      </Container>
      <div className="relative border-t border-paper/15">
        <Container className="py-6 text-center text-sm text-paper/55">
          © {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </Container>
      </div>
    </footer>
  );
}
