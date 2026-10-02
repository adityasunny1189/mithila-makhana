import clsx from "clsx";
import { Pearl } from "../art";

export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={clsx("relative flex overflow-hidden", className)}>
      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl italic sm:text-3xl">{item}</span>
            <Pearl seed={i + 3} className="size-7 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
