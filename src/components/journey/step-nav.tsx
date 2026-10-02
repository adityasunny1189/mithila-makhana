"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Item = { id: string; n: number; label: string };

/** Sticky chip navigator that highlights the step currently on screen. */
export function StepNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  // keep the active chip in view on small screens
  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (list && el) list.scrollTo({ left: el.offsetLeft - list.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Journey steps" className="sticky top-[76px] z-40 sm:top-[84px]">
      <ol ref={listRef} className="mx-auto flex max-w-fit gap-2 overflow-x-auto rounded-full border-[2.5px] border-kohl bg-pearl/95 p-1.5 shadow-[3px_3px_0_var(--kohl)] backdrop-blur [scrollbar-width:none]">
        {items.map((i) => (
          <li key={i.id} data-id={i.id} className="shrink-0">
            <a
              href={`#${i.id}`}
              className={clsx(
                "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold whitespace-nowrap transition",
                active === i.id ? "bg-sindoor text-pearl" : "text-kohl hover:bg-paper",
              )}
            >
              <span
                className={clsx(
                  "grid size-6 place-items-center rounded-full border-2 text-xs",
                  active === i.id ? "border-pearl" : "border-kohl",
                )}
              >
                {i.n}
              </span>
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
