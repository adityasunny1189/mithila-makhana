import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { PearlCluster, Sun } from "./art";
import { ButtonLink } from "./ui/button";
import { Container } from "./ui/container";
import { Reveal } from "./ui/reveal";

export function CtaBand({
  title = "Let's fill your next order with Mithila's finest.",
  body = "Tell us the grade, volume and packing you need. We'll send a quote, a lot sample and a live video of your makhana — usually within one working day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-cream px-3 pb-6 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sindoor px-6 py-16 text-pearl sm:px-14 sm:py-20">
          <Sun className="animate-spin-slow pointer-events-none absolute -top-20 -right-20 w-80 opacity-25" />
          <PearlCluster className="pointer-events-none absolute right-6 bottom-0 hidden h-56 w-80 lg:block" count={6} seed={21} />
          <Container className="relative px-0 sm:px-0 lg:px-0">
            <h2 className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">{title}</h2>
            <p className="mt-6 max-w-2xl text-lg text-pearl/80">{body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/bulk#enquiry" variant="light">
                Start a bulk enquiry <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${site.contact.whatsapp}`}
                external
                variant="outline-light"
              >
                <MessageCircle className="size-4" /> WhatsApp us
              </ButtonLink>
            </div>
          </Container>
        </div>
      </Reveal>
    </section>
  );
}
