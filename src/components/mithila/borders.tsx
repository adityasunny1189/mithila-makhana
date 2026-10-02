import clsx from "clsx";
import { C, Flower, K } from "./motifs";

/**
 * Madhubani border bands, rendered as repeating SVG tiles.
 * Every Mithila painting is framed by one or more of these bands.
 */
export type BandKind = "leaves" | "triangles" | "scallops" | "rope" | "dots";

const enc = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

function rails(w: number, h: number) {
  return `<rect width="${w}" height="${h}" fill="${C.paper}"/><path d="M0 1.5H${w}M0 5H${w}M0 ${h - 5}H${w}M0 ${h - 1.5}H${w}" stroke="${K}" stroke-width="1.6"/>`;
}

function tile(kind: BandKind): { w: number; h: number; body: string } {
  switch (kind) {
    case "leaves":
      return {
        w: 44,
        h: 28,
        body: `${rails(44, 28)}<path d="M4 14 Q20 2 38 14 Q20 26 4 14Z" fill="${C.leaf}" stroke="${K}" stroke-width="1.6"/><path d="M6 14H34" stroke="${K}" stroke-width="1"/><path d="M14 14l4-4M20 14l4-4M26 14l4-4M14 14l4 4M20 14l4 4M26 14l4 4" stroke="${K}" stroke-width=".8"/><circle cx="41" cy="14" r="2.2" fill="${C.sindoor}" stroke="${K}" stroke-width="1"/>`,
      };
    case "triangles":
      return {
        w: 24,
        h: 28,
        body: `${rails(24, 28)}<path d="M0 23L6 7L12 23Z" fill="${C.sindoor}" stroke="${K}" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 23L18 7L24 23Z" fill="${C.haldi}" stroke="${K}" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 7L12 23L18 7" fill="none" stroke="${K}" stroke-width="1.4"/><circle cx="6" cy="17" r="1.6" fill="${K}"/><circle cx="18" cy="17" r="1.6" fill="${K}"/><circle cx="12" cy="10" r="1.2" fill="${K}"/>`,
      };
    case "scallops":
      return {
        w: 24,
        h: 28,
        body: `${rails(24, 28)}<path d="M0 23A12 12 0 0 1 24 23" fill="${C.gulabi}" stroke="${K}" stroke-width="1.5"/><path d="M5 23A7 7 0 0 1 19 23" fill="${C.haldi}" stroke="${K}" stroke-width="1.2"/><circle cx="12" cy="20" r="1.8" fill="${K}"/>`,
      };
    case "rope":
      return {
        w: 14,
        h: 20,
        body: `${rails(14, 20)}<path d="M0 15L7 5M7 15L14 5" stroke="${K}" stroke-width="1.4"/>`,
      };
    case "dots":
      return {
        w: 14,
        h: 16,
        body: `${rails(14, 16)}<circle cx="7" cy="8" r="2" fill="${C.sindoor}" stroke="${K}" stroke-width="1"/>`,
      };
  }
}

export function bandImage(kind: BandKind, vertical = false) {
  const { w, h, body } = tile(kind);
  if (!vertical) return { image: enc(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${body}</svg>`), w, h };
  return {
    image: enc(`<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${w}"><g transform="translate(${h} 0) rotate(90)">${body}</g></svg>`),
    w,
    h,
  };
}

/** A horizontal band, full width. */
export function Band({ kind = "triangles", className }: { kind?: BandKind; className?: string }) {
  const { image, h } = bandImage(kind);
  return <div aria-hidden className={clsx("w-full", className)} style={{ height: h, backgroundImage: image, backgroundRepeat: "repeat-x" }} />;
}

/**
 * Frames its children like a Mithila painting: a patterned band on all four sides,
 * kohl rails and flower corners.
 */
export function Frame({
  kind = "triangles",
  children,
  className,
  innerClassName,
}: {
  kind?: BandKind;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  const hz = bandImage(kind);
  const vt = bandImage(kind, true);
  const t = hz.h;
  return (
    <div className={clsx("relative bg-paper", className)} style={{ padding: t }}>
      <div aria-hidden className="absolute inset-x-0 top-0" style={{ height: t, backgroundImage: hz.image, backgroundRepeat: "repeat-x", backgroundPosition: "center" }} />
      <div aria-hidden className="absolute inset-x-0 bottom-0 rotate-180" style={{ height: t, backgroundImage: hz.image, backgroundRepeat: "repeat-x", backgroundPosition: "center" }} />
      <div aria-hidden className="absolute inset-y-0 right-0" style={{ width: t, backgroundImage: vt.image, backgroundRepeat: "repeat-y", backgroundPosition: "center" }} />
      <div aria-hidden className="absolute inset-y-0 left-0 rotate-180" style={{ width: t, backgroundImage: vt.image, backgroundRepeat: "repeat-y", backgroundPosition: "center" }} />
      {(["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"] as const).map((pos) => (
        <span key={pos} aria-hidden className={clsx("absolute z-10 grid place-items-center border-[1.6px] border-kohl bg-haldi", pos)} style={{ width: t, height: t }}>
          <Flower className="size-[80%]" color={C.sindoor} />
        </span>
      ))}
      <div className={clsx("relative h-full border-2 border-kohl", innerClassName)}>{children}</div>
    </div>
  );
}
