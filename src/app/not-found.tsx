import { Fish } from "@/components/mithila/motifs";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="paper filler grid min-h-[80vh] place-items-center px-4 pt-32 pb-20 text-center">
      <div>
        <Fish className="animate-float mx-auto w-56" />
        <h1 className="font-display mt-8 text-5xl text-kohl sm:text-6xl">This page swam away.</h1>
        <p className="mt-4 text-lg text-muted">We couldn&apos;t find what you were looking for.</p>
        <ButtonLink href="/" className="mt-8">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
