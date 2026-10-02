import clsx from "clsx";
import { Flower } from "../mithila/motifs";
import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  hindi?: string;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

/** Section heading with a Madhubani flower-and-line eyebrow. */
export function Heading({ eyebrow, title, hindi, intro, align = "center", tone = "light", className, as = "h2" }: Props) {
  const dark = tone === "dark";
  const H = as;
  return (
    <Reveal className={clsx(align === "center" ? "mx-auto text-center" : "", "max-w-3xl", className)}>
      {eyebrow && (
        <p
          className={clsx(
            "mb-4 inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[0.22em] uppercase",
            dark ? "text-haldi" : "text-sindoor",
          )}
        >
          <Flower className="size-5" />
          {eyebrow}
          {align === "center" && <Flower className="size-5" />}
        </p>
      )}
      <H className={clsx("font-display text-[2.4rem] leading-[1.1] text-balance sm:text-5xl lg:text-[3.4rem]", dark ? "text-paper" : "text-kohl")}>
        {title}
      </H>
      {hindi && (
        <p className={clsx("font-display mt-2 text-xl", dark ? "text-haldi/90" : "text-sindoor/80")} lang="hi">
          {hindi}
        </p>
      )}
      {intro && <p className={clsx("mt-5 text-lg leading-relaxed", dark ? "text-paper/80" : "text-muted")}>{intro}</p>}
    </Reveal>
  );
}
