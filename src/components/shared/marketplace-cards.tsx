import { ArrowUpRight, Clock } from "lucide-react";
import clsx from "clsx";
import { marketplaces } from "@/lib/site";
import { Reveal } from "../ui/reveal";

/** Where to buy: Meesho, Flipkart, Amazon (coming soon). */
export function MarketplaceCards({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={clsx("grid gap-5", compact ? "sm:grid-cols-3" : "md:grid-cols-3", className)}>
      {marketplaces.map((m, i) => {
        const soon = !m.url;
        return (
          <Reveal key={m.key} delay={i * 0.08}>
            <div
              className={clsx(
                "relative flex h-full flex-col rounded-[1.75rem] border-[2.5px] border-kohl bg-pearl shadow-[5px_5px_0_var(--kohl)]",
                compact ? "p-6" : "p-7 sm:p-8",
                soon && "bg-paper-deep/60",
              )}
            >
              <span className="absolute inset-2 rounded-[1.3rem] border border-dashed border-kohl/30" aria-hidden />
              <p className="text-xs font-extrabold tracking-[0.2em] text-muted uppercase">{soon ? "Coming soon" : "Available on"}</p>
              <h3 className={clsx("font-display mt-2", compact ? "text-3xl" : "text-4xl")} style={{ color: m.color }}>
                {m.name}
              </h3>
              <p className="mt-2 text-muted">{m.tagline}</p>
              <div className="relative mt-auto pt-6">
                {soon ? (
                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-dashed border-kohl/40 px-5 py-3 text-sm font-extrabold text-muted">
                    <Clock className="size-4" /> Coming Soon
                  </span>
                ) : (
                  <a
                    href={m.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-kohl px-5 py-3 text-sm font-extrabold tracking-wide text-pearl uppercase shadow-[3px_3px_0_var(--kohl)] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--kohl)]"
                    style={{ background: m.color }}
                  >
                    {m.cta} <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
