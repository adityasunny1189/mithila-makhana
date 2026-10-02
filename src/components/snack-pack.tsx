import clsx from "clsx";
import type { Snack } from "@/lib/data";
import { Pearl } from "./art";

/** Illustrated stand-up pouch used for the future D2C snack range. */
export function SnackPack({ snack, className, index = 0 }: { snack: Snack; className?: string; index?: number }) {
  return (
    <div
      className={clsx(
        "relative aspect-[3/4] w-full overflow-hidden rounded-t-[2.2rem] rounded-b-2xl border-2 border-ink/80 shadow-[0_30px_60px_-30px_rgba(29,42,34,0.6)]",
        className,
      )}
      style={{ background: snack.hue }}
    >
      {/* crimped top */}
      <div className="absolute inset-x-0 top-0 h-5 border-b-2 border-ink/80 bg-[repeating-linear-gradient(90deg,transparent_0_6px,rgba(29,42,34,0.18)_6px_8px)]" />
      {/* tear notch */}
      <div className="absolute top-7 right-0 h-3 w-2 rounded-l-full bg-cream" />
      <div className="flex h-full flex-col items-center px-4 pt-9 pb-4 text-center">
        <p className="text-[10px] font-extrabold tracking-[0.3em] text-ink/70 uppercase">Mithila Makhana</p>
        <p className="font-deva mt-1 text-sm text-ink/60" lang="hi">
          मखान
        </p>
        <div className="relative my-3 grid w-[78%] flex-1 place-items-center rounded-full border-2 border-ink/80 bg-pearl/70">
          <Pearl seed={index * 7 + 2} className="absolute top-[18%] left-[16%] w-[38%] rotate-12" />
          <Pearl seed={index * 7 + 3} className="absolute top-[30%] right-[12%] w-[34%] -rotate-12" />
          <Pearl seed={index * 7 + 4} className="absolute bottom-[12%] left-[30%] w-[36%]" />
        </div>
        <p className="font-display text-lg leading-tight font-semibold text-ink">{snack.name}</p>
        <span
          className="mt-2 rounded-full px-3 py-1 text-[10px] font-extrabold tracking-[0.2em] text-pearl uppercase"
          style={{ background: snack.accent }}
        >
          {snack.flavour} · Roasted
        </span>
      </div>
    </div>
  );
}
