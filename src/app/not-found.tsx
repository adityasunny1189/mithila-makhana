import { Pearl } from "@/components/art";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grain grid min-h-[80vh] place-items-center bg-cream px-4 pt-32 pb-20 text-center">
      <div>
        <div className="flex justify-center gap-3">
          <Pearl seed={4} className="animate-float size-20" />
          <Pearl seed={0} className="animate-float-slow size-14" />
          <Pearl seed={4} className="animate-float size-20" />
        </div>
        <h1 className="font-display mt-8 text-6xl font-semibold text-pond">This pearl got away.</h1>
        <p className="mt-4 text-lg text-muted">The page you&apos;re looking for sank to the bottom of the pond.</p>
        <ButtonLink href="/" className="mt-8">
          Back to the surface
        </ButtonLink>
      </div>
    </section>
  );
}
