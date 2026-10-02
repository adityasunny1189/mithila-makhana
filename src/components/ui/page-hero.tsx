import { Container } from "./container";
import { BorderBand, PearlCluster } from "../art";
import { Reveal } from "./reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  hindi?: string;
  intro: React.ReactNode;
  art?: React.ReactNode;
  children?: React.ReactNode;
};

/** Shared hero for inner pages: deep pond green with a Madhubani band. */
export function PageHero({ eyebrow, title, hindi, intro, art, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-pond pt-36 text-pearl sm:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,168,43,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(79,122,74,0.5),transparent_60%)]" />
      <Container className="relative grid grid-cols-1 items-end gap-12 pb-20 lg:grid-cols-[1.3fr_1fr] lg:pb-28">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-haldi">
            <span className="h-px w-8 bg-haldi" />
            {eyebrow}
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {hindi && (
            <p className="font-deva mt-4 text-3xl text-haldi/80" lang="hi">
              {hindi}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
        <div className="relative hidden h-72 lg:block">{art ?? <PearlCluster className="h-full w-full" count={8} seed={7} />}</div>
      </Container>
      <BorderBand fill="#e3a82b" color="#142a1d" />
    </section>
  );
}
