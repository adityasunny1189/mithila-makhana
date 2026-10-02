import Link from "next/link";
import clsx from "clsx";
import { Pearl } from "../art";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" className={clsx("group flex items-center gap-2.5", className)} aria-label="Mithila Makhana home">
      <span className="relative grid size-10 place-items-center rounded-full bg-sindoor ring-2 ring-haldi/60 transition-transform duration-500 group-hover:rotate-[20deg]">
        <Pearl seed={11} className="size-7" />
      </span>
      <span className="leading-none">
        <span className={clsx("font-display block text-xl font-semibold tracking-tight", tone === "dark" ? "text-pond" : "text-pearl")}>
          Mithila Makhana
        </span>
        <span className={clsx("font-deva block text-[13px]", tone === "dark" ? "text-husk/70" : "text-haldi/80")} lang="hi">
          मिथिला मखान
        </span>
      </span>
    </Link>
  );
}
