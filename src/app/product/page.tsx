import type { Metadata } from "next";
import { Check, QrCode } from "lucide-react";
import Link from "next/link";
import { product } from "@/lib/content";
import { PackBack } from "@/components/mithila/pack-back";
import { Flower } from "@/components/mithila/motifs";
import { ProductGallery } from "@/components/product/gallery";
import { MarketplaceCards } from "@/components/shared/marketplace-cards";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Our Product — SwadUp Premium Makhana 200g",
  description: "SwadUp Foods Premium Makhana, 200g. Premium quality, carefully selected and hygienically packed. Buy on Meesho and Flipkart.",
};

export default function ProductPage() {
  return (
    <section className="paper filler pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ProductGallery back={<PackBack className="h-full drop-shadow-[6px_8px_0_rgba(27,20,16,0.85)]" />} />
          </Reveal>
          <Reveal delay={0.1} className="lg:pt-6">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.22em] text-sindoor uppercase">
              <Flower className="size-5" /> Our product
            </p>
            <h1 className="font-display mt-3 text-5xl leading-[1.05] text-kohl sm:text-6xl">{product.name}</h1>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border-[2.5px] border-kohl bg-haldi px-5 py-2 shadow-[3px_3px_0_var(--kohl)]">
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase">Net Weight</span>
              <span className="font-display text-2xl">{product.weight}</span>
            </div>

            <h2 className="font-display mt-10 text-3xl text-kohl">Product Highlights</h2>
            <ul className="mt-4 space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-lg font-semibold">
                  <span className="grid size-8 place-items-center rounded-full border-2 border-kohl bg-leaf text-pearl">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/journey"
              className="mt-10 flex items-center gap-4 rounded-2xl border-2 border-dashed border-kohl bg-pearl p-5 transition hover:bg-paper-deep"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border-2 border-kohl bg-sindoor text-pearl">
                <QrCode className="size-6" />
              </span>
              <span>
                <span className="block font-extrabold text-kohl">Scan the QR code on the back of the pack</span>
                <span className="text-muted">to see the journey of your makhana — from farm to home →</span>
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-center text-4xl text-kohl sm:text-5xl">Where to Buy</h2>
          <MarketplaceCards className="mt-10" />
        </div>
      </Container>
    </section>
  );
}
