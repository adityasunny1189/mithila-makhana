import clsx from "clsx";
import { Reveal } from "./reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  hindi?: string;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, hindi, intro, align = "left", tone = "light", className }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={clsx(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p
        className={clsx(
          "mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em]",
          dark ? "text-haldi" : "text-sindoor",
        )}
      >
        <span className={clsx("h-px w-8", dark ? "bg-haldi" : "bg-sindoor")} />
        {eyebrow}
        {align === "center" && <span className={clsx("h-px w-8", dark ? "bg-haldi" : "bg-sindoor")} />}
      </p>
      <h2
        className={clsx(
          "font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl",
          dark ? "text-pearl" : "text-pond",
        )}
      >
        {title}
      </h2>
      {hindi && (
        <p className={clsx("font-deva mt-3 text-2xl", dark ? "text-haldi/80" : "text-husk/70")} lang="hi">
          {hindi}
        </p>
      )}
      {intro && (
        <p className={clsx("mt-6 text-lg leading-relaxed", dark ? "text-cream/75" : "text-muted")}>{intro}</p>
      )}
    </Reveal>
  );
}
