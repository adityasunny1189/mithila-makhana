import Link from "next/link";
import clsx from "clsx";
import { site } from "@/lib/site";
import { Makhana } from "../mithila/motifs";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={clsx("relative grid shrink-0 place-items-center rounded-full border-[2.5px] border-kohl bg-sindoor", className)}>
      <span className="absolute inset-[3px] rounded-full border border-dashed border-haldi" />
      <Makhana className="size-[64%]" variant={1} />
    </span>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" className={clsx("group flex items-center gap-2.5", className)} aria-label={`${site.name} home`}>
      <LogoMark className="size-11 transition-transform duration-500 group-hover:rotate-[24deg]" />
      <span className="leading-none">
        <span className={clsx("font-display block text-[1.35rem] tracking-wide", tone === "dark" ? "text-sindoor" : "text-haldi")}>
          {site.wordmark}
        </span>
        <span className={clsx("mt-0.5 block text-[10.5px] font-bold tracking-[0.18em] uppercase", tone === "dark" ? "text-kohl/70" : "text-paper/70")}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
