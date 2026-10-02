import { ArrowRight, Radio, Video } from "lucide-react";
import { site } from "@/lib/site";
import { streamCategories } from "@/lib/data";
import { YouTubePlayer } from "../live/youtube-player";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function LiveTeaser() {
  return (
    <section className="relative overflow-hidden bg-pearl py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <SectionHeading
            eyebrow="Live from the ponds"
            title={
              <>
                Don&apos;t take our word for it. <em className="text-sindoor">Watch it happen.</em>
              </>
            }
            intro="We stream the harvest, the popping floor and the packing line on YouTube — so buyers and snack lovers can see exactly where their makhana comes from."
          />
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {streamCategories.slice(0, 4).map((c) => (
              <span key={c.key} className="inline-flex items-center gap-2 rounded-full border border-pond/15 bg-cream px-4 py-2 text-sm font-semibold text-pond">
                <Video className="size-4 text-sindoor" /> {c.title}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/live">
              <Radio className="size-4" /> Go to live stream
            </ButtonLink>
            <ButtonLink href={site.social.youtube} variant="ghost" external>
              Subscribe on YouTube <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-haldi/30" />
          <YouTubePlayer
            stage
            channelId={site.youtube.channelId}
            title="Live from the ponds of Darbhanga"
            emptyNote="Streams start soon — subscribe on YouTube"
          />
        </Reveal>
      </Container>
    </section>
  );
}
