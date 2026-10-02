import clsx from "clsx";
import type { Grade } from "@/lib/data";
import { Pearl } from "./art";

const toneBg: Record<Grade["tone"], string> = {
  jumbo: "bg-pond text-pearl",
  premium: "bg-sindoor text-pearl",
  standard: "bg-haldi text-ink",
  phool: "bg-pearl text-ink border border-pond/10",
  raw: "bg-husk text-pearl",
  flour: "bg-cream-deep text-ink",
};

function GradeVisual({ grade }: { grade: Grade }) {
  if (grade.tone === "raw") {
    // raw gurri: dark, hard seeds
    return (
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {Array.from({ length: 9 }, (_, i) => (
          <span
            key={i}
            className="size-5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#6d5a4a,#1a120c_70%)] shadow-inner"
          />
        ))}
      </div>
    );
  }
  if (grade.tone === "flour") {
    return (
      <div className="relative h-16 w-28">
        <div className="absolute inset-x-0 bottom-0 h-12 rounded-[50%_50%_10px_10px/80%_80%_10px_10px] bg-[radial-gradient(circle_at_50%_20%,#fffdf8,#e8dcc4)] shadow-md" />
      </div>
    );
  }
  const px = grade.sizeMm * 4.6;
  return (
    <div className="flex items-end gap-2">
      <Pearl seed={grade.sizeMm} className="drop-shadow-lg" style={{ width: px, height: px }} />
      {grade.tone === "phool" && <Pearl seed={4} className="drop-shadow-md" style={{ width: px * 0.7, height: px * 0.7 }} />}
    </div>
  );
}

export function GradeCard({ grade, detailed = false }: { grade: Grade; detailed?: boolean }) {
  return (
    <article
      className={clsx(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-1.5",
        toneBg[grade.tone],
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.22em] uppercase opacity-70">{grade.size}</p>
          <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight">{grade.name}</h3>
        </div>
        <span className="font-deva text-3xl opacity-60" lang="hi">
          {grade.hindi}
        </span>
      </div>
      <div className="my-8 grid h-32 place-items-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
        <GradeVisual grade={grade} />
      </div>
      <p className="leading-relaxed opacity-80">{grade.description}</p>
      {detailed && grade.pop > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-xs font-bold tracking-wide uppercase opacity-70">
            <span>Pop rate</span>
            <span>{grade.pop}%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-current/15">
            <div className="h-full rounded-full bg-current" style={{ width: `${grade.pop}%` }} />
          </div>
        </div>
      )}
      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {grade.bestFor.map((b) => (
          <li key={b} className="rounded-full border border-current/25 px-3 py-1 text-xs font-semibold">
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
