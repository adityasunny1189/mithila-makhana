import type { Metadata } from "next";
import { Makhana, Peacock } from "@/components/mithila/motifs";
import { PackFront } from "@/components/mithila/pack";
import { MarketplaceCards } from "@/components/shared/marketplace-cards";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Buy Now",
  description: "Buy SwadUp Premium Makhana 200g on Meesho or Flipkart. Coming soon to Amazon.",
};

export default function BuyPage() {
  return (
    <section className="paper filler relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Peacock className="pointer-events-none absolute bottom-0 -left-20 hidden w-72 opacity-90 md:block" />
        <Peacock className="pointer-events-none absolute -right-20 bottom-0 hidden w-72 -scale-x-100 opacity-90 md:block" />
        <Container className="relative">
          <Reveal className="mx-auto mb-8 w-36">
            <div className="relative">
              <PackFront className="animate-float w-full drop-shadow-[6px_8px_0_rgba(27,20,16,0.85)]" />
              <Makhana className="absolute -top-2 -right-8 w-12" variant={1} />
              <Makhana className="absolute bottom-6 -left-9 w-10" variant={2} />
            </div>
          </Reveal>
          <Heading as="h1" eyebrow="Buy now" title="Choose Your Preferred Marketplace" intro="SwadUp Premium Makhana — 200g, delivered to your home." />
          <MarketplaceCards className="mx-auto mt-14 max-w-5xl" />
        </Container>
      </section>
  );
}
