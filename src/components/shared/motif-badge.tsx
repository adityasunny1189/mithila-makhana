import clsx from "clsx";
import { Eye, Lotus, Makhana } from "../mithila/motifs";
import { PackFront } from "../mithila/pack";

const bg = { lotus: "bg-haldi", makhana: "bg-gulabi", eye: "bg-leaf", pack: "bg-neel" } as const;

/** A circular painted badge holding one motif — used in place of emoji icons. */
export function MotifBadge({ motif, className }: { motif: keyof typeof bg; className?: string }) {
  return (
    <span className={clsx("relative grid size-20 place-items-center rounded-full border-[2.5px] border-kohl", bg[motif], className)}>
      <span className="absolute inset-1.5 rounded-full border border-dashed border-kohl/60" aria-hidden />
      {motif === "lotus" && <Lotus className="w-14" />}
      {motif === "makhana" && <Makhana className="w-12" variant={2} />}
      {motif === "eye" && <Eye className="w-14" />}
      {motif === "pack" && <PackFront className="h-14" />}
    </span>
  );
}
