"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { product } from "@/lib/content";
import { Frame } from "../mithila/borders";
import { Makhana } from "../mithila/motifs";
import { PackFront } from "../mithila/pack";

type View = "front" | "back" | "closeup";

function CloseUp() {
  return (
    <div className="relative size-full bg-pearl">
      {[
        [8, 10, 34, 0],
        [40, 4, 30, 1],
        [66, 18, 28, 2],
        [20, 40, 36, 2],
        [54, 44, 34, 0],
        [4, 70, 26, 1],
        [34, 72, 28, 0],
        [66, 70, 30, 1],
      ].map(([x, y, s, v], i) => (
        <Makhana key={i} variant={v} className="absolute" style={{ left: `${x}%`, top: `${y}%`, width: `${s}%` }} />
      ))}
    </div>
  );
}

/** Product images: front, back and close-up. Uses real photos when set in `product.images`. */
export function ProductGallery({ back }: { back: React.ReactNode }) {
  const [view, setView] = useState<View>("front");
  const views: { key: View; label: string }[] = [
    { key: "front", label: "Front" },
    { key: "back", label: "Back" },
    { key: "closeup", label: "Close-up" },
  ];

  const render = (v: View, thumb = false) => {
    const src = product.images[v];
    if (src) return <Image src={src} alt={`${product.name} — ${v}`} fill sizes={thumb ? "120px" : "(min-width:1024px) 50vw, 100vw"} className="object-contain" />;
    if (v === "closeup") return <CloseUp />;
    return <div className="grid size-full place-items-center p-[8%]">{v === "front" ? <PackFront className="h-full drop-shadow-[6px_8px_0_rgba(27,20,16,0.85)]" /> : back}</div>;
  };

  return (
    <div>
      <Frame kind="triangles" className="shadow-[6px_6px_0_var(--kohl)]">
        <div className="paper filler relative aspect-square">{render(view)}</div>
      </Frame>
      <div className="mt-5 grid grid-cols-3 gap-3" role="tablist" aria-label="Product images">
        {views.map((v) => (
          <button
            key={v.key}
            role="tab"
            aria-selected={view === v.key}
            onClick={() => setView(v.key)}
            className={clsx(
              "overflow-hidden rounded-2xl border-[2.5px] border-kohl bg-paper text-left transition",
              view === v.key ? "shadow-[4px_4px_0_var(--kohl)] ring-4 ring-haldi" : "opacity-75 hover:opacity-100",
            )}
          >
            <div className="relative aspect-square">{render(v.key, true)}</div>
            <p className="border-t-2 border-kohl bg-pearl px-3 py-1.5 text-center text-xs font-extrabold tracking-wide uppercase">{v.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
