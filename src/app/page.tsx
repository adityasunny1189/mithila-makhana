import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { VarietiesPreview } from "@/components/home/varieties-preview";
import { ProcessTeaser } from "@/components/home/process-teaser";
import { LiveTeaser } from "@/components/home/live-teaser";
import { BulkSection } from "@/components/home/bulk-section";
import { SnacksTeaser } from "@/components/home/snacks-teaser";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <VarietiesPreview />
      <ProcessTeaser />
      <LiveTeaser />
      <BulkSection />
      <SnacksTeaser />
      <CtaBand />
    </>
  );
}
