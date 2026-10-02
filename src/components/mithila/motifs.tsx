import { useId } from "react";

/**
 * Mithila (Madhubani) painting motifs.
 * Hallmarks used throughout: kohl double outlines, kachni (fine hatching) in the
 * gap between lines, bharni (flat bright fills), fish-scale and dot infills.
 */

export const K = "#1b1410"; // kohl
export const C = {
  sindoor: "#c8341f",
  haldi: "#f0b323",
  leaf: "#2f7a3a",
  neel: "#1f4d8f",
  gulabi: "#d94f7c",
  earth: "#7a4a24",
  pearl: "#fffaf0",
  paper: "#f6ecd6",
  purple: "#7b3f98",
};

export type MotifProps = React.SVGProps<SVGSVGElement>;

/** Short unique prefix for pattern ids inside one SVG. */
export function usePrefix() {
  return "m" + useId().replace(/[^a-zA-Z0-9]/g, "");
}

/** Shared fill patterns. Reference as url(#<p>-hatch) etc. */
export function Patterns({ p }: { p: string }) {
  return (
    <>
      <pattern id={`${p}-hatch`} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="5" stroke={K} strokeWidth="1.1" />
      </pattern>
      <pattern id={`${p}-hatchv`} width="4" height="4" patternUnits="userSpaceOnUse">
        <line x1="2" y1="0" x2="2" y2="4" stroke={K} strokeWidth="1" />
      </pattern>
      <pattern id={`${p}-cross`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <path d="M0 3.5h7M3.5 0v7" stroke={K} strokeWidth="1" />
      </pattern>
      <pattern id={`${p}-dots`} width="7" height="7" patternUnits="userSpaceOnUse">
        <circle cx="3.5" cy="3.5" r="1.1" fill={K} />
      </pattern>
      <pattern id={`${p}-scales`} width="12" height="9" patternUnits="userSpaceOnUse">
        <path d="M0 9 A6 6 0 0 1 12 9" fill="none" stroke={K} strokeWidth="1.2" />
        <path d="M-6 4.5 A6 6 0 0 1 6 4.5 M6 4.5 A6 6 0 0 1 18 4.5" fill="none" stroke={K} strokeWidth="1.2" />
      </pattern>
      <pattern id={`${p}-water`} width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0 6 Q6 0 12 6 T24 6" fill="none" stroke={K} strokeWidth="1.2" opacity="0.7" />
      </pattern>
      <pattern id={`${p}-weave`} width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M0 5 Q2.5 2 5 5 T10 5" fill="none" stroke={K} strokeWidth="1" />
        <path d="M5 0v10" stroke={K} strokeWidth="0.8" opacity="0.6" />
      </pattern>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Makhana — the popped pearl, painted                                */
/* ------------------------------------------------------------------ */

export function Makhana({ variant = 0, ...props }: MotifProps & { variant?: number }) {
  const p = usePrefix();
  const patches = [
    [
      [38, 34, 9, 6, 20],
      [62, 58, 7, 5, -30],
      [36, 66, 5, 4, 10],
    ],
    [
      [58, 32, 8, 5, -20],
      [40, 58, 10, 6, 35],
    ],
    [
      [44, 40, 6, 5, 0],
      [64, 48, 6, 4, 60],
      [50, 68, 8, 5, -10],
    ],
  ][variant % 3];
  return (
    <svg viewBox="0 0 100 100" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
        <clipPath id={`${p}-c`}>
          <circle cx="50" cy="50" r="40" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="44" fill={C.pearl} stroke={K} strokeWidth="3" />
      {/* kachni shading on the lower side */}
      <g clipPath={`url(#${p}-c)`}>
        <path d="M10 60 A40 40 0 0 0 90 60 A44 30 0 0 1 10 60Z" fill={`url(#${p}-hatch)`} opacity="0.55" />
      </g>
      <circle cx="50" cy="50" r="38" fill="none" stroke={K} strokeWidth="1.2" />
      {patches.map(([x, y, rx, ry, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} transform={`rotate(${r} ${x} ${y})`} fill={C.earth} stroke={K} strokeWidth="1.6" />
      ))}
      <path d="M30 28 Q38 20 48 20" fill="none" stroke={K} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Fish — symbol of fertility and good fortune                        */
/* ------------------------------------------------------------------ */

export function Fish({ color = C.haldi, fin = C.sindoor, ...props }: MotifProps & { color?: string; fin?: string }) {
  const p = usePrefix();
  const outer = "M16 60 C 52 6, 150 4, 186 60 C 150 116, 52 114, 16 60 Z";
  const inner = "M30 60 C 62 20, 146 18, 174 60 C 146 102, 62 100, 30 60 Z";
  return (
    <svg viewBox="0 0 240 120" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
        <clipPath id={`${p}-b`}>
          <path d={inner} />
        </clipPath>
      </defs>
      {/* fins */}
      <path d="M92 22 Q110 -4 138 14 L130 24 Z" fill={fin} stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M92 98 Q110 124 138 106 L130 96 Z" fill={fin} stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      {/* tail */}
      <path d="M182 60 L 232 18 Q 216 60 232 102 Z" fill={fin} stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      {[30, 45, 60, 75, 90].map((y) => (
        <line key={y} x1="188" y1="60" x2="224" y2={y} stroke={K} strokeWidth="1.3" />
      ))}
      {/* double outline with kachni band */}
      <path d={outer} fill={`url(#${p}-hatch)`} stroke={K} strokeWidth="3" />
      <path d={inner} fill={color} stroke={K} strokeWidth="1.8" />
      {/* scales on the body */}
      <g clipPath={`url(#${p}-b)`}>
        <rect x="76" y="0" width="120" height="120" fill={`url(#${p}-scales)`} />
      </g>
      {/* head line & gills */}
      <path d="M74 24 Q62 60 74 96" fill="none" stroke={K} strokeWidth="2.5" />
      <path d="M66 32 Q56 60 66 88" fill="none" stroke={K} strokeWidth="1.4" />
      {/* eye */}
      <circle cx="46" cy="52" r="11" fill={C.pearl} stroke={K} strokeWidth="2.5" />
      <circle cx="48" cy="52" r="5" fill={K} />
      <path d="M34 44 L30 40 M40 40 L38 35 M48 39 L48 34" stroke={K} strokeWidth="1.5" strokeLinecap="round" />
      {/* mouth */}
      <path d="M17 60 Q24 66 30 64" fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Two fish circling each other — the classic Mithila marriage & prosperity symbol. */
export function FishPair(props: MotifProps) {
  return (
    <svg viewBox="0 0 240 240" aria-hidden {...props}>
      <g transform="translate(120 120) rotate(-28) translate(-112 -100)">
        <Fish width="224" height="112" color={C.haldi} fin={C.sindoor} />
      </g>
      <g transform="translate(120 120) rotate(152) translate(-112 -100)">
        <Fish width="224" height="112" color={C.gulabi} fin={C.leaf} />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Sun with a face                                                    */
/* ------------------------------------------------------------------ */

export function Sun(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <g transform="translate(100 100)">
        {Array.from({ length: 18 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 20})`}>
            <path d="M-9 -58 L0 -96 L9 -58 Z" fill={i % 2 ? C.sindoor : C.haldi} stroke={K} strokeWidth="2" strokeLinejoin="round" />
            <line x1="0" y1="-62" x2="0" y2="-86" stroke={K} strokeWidth="1" />
          </g>
        ))}
        <circle r="60" fill={`url(#${p}-hatch)`} stroke={K} strokeWidth="3" />
        <circle r="52" fill={C.haldi} stroke={K} strokeWidth="2" />
        <circle r="56" fill="none" stroke={K} strokeWidth="1" strokeDasharray="1 4" strokeLinecap="round" />
        {/* brows joined to the long nose line */}
        <path d="M-34 -16 Q-20 -28 -4 -16 L-2 14 Q0 20 6 16 M4 -16 Q20 -28 34 -16" fill="none" stroke={K} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* almond eyes */}
        {[-19, 19].map((x) => (
          <g key={x}>
            <path d={`M${x - 13} -4 Q${x} -16 ${x + 13} -4 Q${x} 6 ${x - 13} -4 Z`} fill={C.pearl} stroke={K} strokeWidth="2" />
            <circle cx={x} cy="-5" r="4.5" fill={K} />
          </g>
        ))}
        {/* lips */}
        <path d="M-14 30 Q0 22 14 30 Q0 40 -14 30 Z" fill={C.sindoor} stroke={K} strokeWidth="2" />
        <line x1="-14" y1="30" x2="14" y2="30" stroke={K} strokeWidth="1.2" />
        {/* cheeks */}
        <circle cx="-32" cy="16" r="5" fill={C.sindoor} opacity="0.75" />
        <circle cx="32" cy="16" r="5" fill={C.sindoor} opacity="0.75" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Lotus                                                              */
/* ------------------------------------------------------------------ */

export function Lotus({ color = C.gulabi, accent = C.sindoor, ...props }: MotifProps & { color?: string; accent?: string }) {
  const p = usePrefix();
  const petal = "M0 0 C -24 -30 -20 -80 0 -104 C 20 -80 24 -30 0 0 Z";
  const petalIn = "M0 -10 C -14 -34 -12 -70 0 -88 C 12 -70 14 -34 0 -10 Z";
  return (
    <svg viewBox="0 0 220 170" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <g transform="translate(110 132)">
        {[-72, -36, 36, 72, 0].map((a, i) => (
          <g key={a} transform={`rotate(${a})`}>
            <path d={petal} fill={`url(#${p}-hatch)`} stroke={K} strokeWidth="2.8" />
            <path d={petalIn} fill={i === 4 ? accent : color} stroke={K} strokeWidth="1.6" />
            <path d="M0 -18 L0 -78" stroke={K} strokeWidth="1.2" />
          </g>
        ))}
        {/* seed pod / base */}
        <path d="M-56 0 Q0 34 56 0 Z" fill={C.leaf} stroke={K} strokeWidth="2.8" />
        <path d="M-44 4 Q0 26 44 4" fill="none" stroke={K} strokeWidth="1.2" strokeDasharray="2 4" />
        {[-30, -15, 0, 15, 30].map((x) => (
          <circle key={x} cx={x} cy="8" r="2" fill={C.haldi} stroke={K} strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Lily pad (makhana leaf, from above)                                */
/* ------------------------------------------------------------------ */

export function LeafPad({ color = C.leaf, ...props }: MotifProps & { color?: string }) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 200 200" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <path d="M100 100 L104 8 A92 92 0 1 1 96 8 Z" fill={`url(#${p}-hatch)`} stroke={K} strokeWidth="3" />
      <path d="M100 100 L103 18 A82 82 0 1 1 97 18 Z" fill={color} stroke={K} strokeWidth="1.6" />
      {Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2 - Math.PI / 2 + 0.22;
        return <line key={i} x1="100" y1="100" x2={(100 + Math.cos(a) * 80).toFixed(1)} y2={(100 + Math.sin(a) * 80).toFixed(1)} stroke={K} strokeWidth="1.2" />;
      })}
      <circle cx="100" cy="100" r="44" fill="none" stroke={K} strokeWidth="1" strokeDasharray="1 5" strokeLinecap="round" />
      <circle cx="100" cy="100" r="7" fill={C.haldi} stroke={K} strokeWidth="1.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Peacock                                                            */
/* ------------------------------------------------------------------ */

export function Peacock(props: MotifProps) {
  const p = usePrefix();
  const feathers = Array.from({ length: 6 }, (_, i) => -80 + i * 24);
  return (
    <svg viewBox="0 0 280 240" aria-hidden {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      {/* tail fan */}
      <g transform="translate(150 150)">
        {feathers.map((a, i) => (
          <g key={a} transform={`rotate(${a + 90})`}>
            <path d="M0 0 C 12 -40 18 -80 0 -118 C -18 -80 -12 -40 0 0 Z" fill={i % 2 ? C.leaf : "#3c8f48"} stroke={K} strokeWidth="2.2" />
            <path d="M0 -8 L0 -96" stroke={K} strokeWidth="1" />
            {[-30, -50, -70].map((y) => (
              <path key={y} d={`M-6 ${y + 6} L0 ${y} L6 ${y + 6}`} fill="none" stroke={K} strokeWidth="1" />
            ))}
            <ellipse cx="0" cy="-100" rx="10" ry="13" fill={C.haldi} stroke={K} strokeWidth="1.8" />
            <ellipse cx="0" cy="-101" rx="6" ry="8" fill={C.neel} stroke={K} strokeWidth="1.4" />
            <circle cx="0" cy="-102" r="2.4" fill={K} />
          </g>
        ))}
      </g>
      {/* body */}
      <path
        d="M154 152 C 132 200, 70 200, 62 164 C 56 134, 92 122, 102 100 C 108 86, 104 70, 98 60 L 108 54 C 118 72, 122 92, 112 112 C 132 112, 150 126, 154 152 Z"
        fill={`url(#${p}-hatch)`}
        stroke={K}
        strokeWidth="3"
      />
      <path d="M146 154 C 128 190, 78 190, 72 162 C 68 138, 100 126, 108 108 C 128 112, 144 128, 146 154 Z" fill={C.neel} stroke={K} strokeWidth="1.6" />
      <path d="M146 154 C 128 190, 78 190, 72 162 C 68 138, 100 126, 108 108 C 128 112, 144 128, 146 154 Z" fill={`url(#${p}-scales)`} opacity="0.6" />
      {/* wing */}
      <path d="M86 150 Q110 128 136 150 Q112 172 86 150 Z" fill={C.haldi} stroke={K} strokeWidth="2" />
      <path d="M92 150 L130 150" stroke={K} strokeWidth="1" />
      {/* head */}
      <circle cx="100" cy="52" r="13" fill={C.neel} stroke={K} strokeWidth="2.5" />
      <path d="M88 50 L72 56 L88 58 Z" fill={C.haldi} stroke={K} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="96" cy="50" r="4.5" fill={C.pearl} stroke={K} strokeWidth="1.5" />
      <circle cx="95" cy="50" r="2" fill={K} />
      {/* crest */}
      {[-24, 0, 24].map((r) => (
        <g key={r} transform={`rotate(${r} 102 40)`}>
          <line x1="102" y1="40" x2="102" y2="18" stroke={K} strokeWidth="1.6" />
          <circle cx="102" cy="16" r="4" fill={C.sindoor} stroke={K} strokeWidth="1.5" />
        </g>
      ))}
      {/* legs */}
      <path d="M100 190 L96 222 M96 222 L86 230 M96 222 L104 230 M120 190 L124 222 M124 222 L114 230 M124 222 L134 230" stroke={K} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Small motifs                                                       */
/* ------------------------------------------------------------------ */

/** A leafy branch, used as a divider vine. */
export function Vine({ length = 6, ...props }: MotifProps & { length?: number }) {
  const h = length * 40;
  return (
    <svg viewBox={`0 0 60 ${h}`} aria-hidden {...props}>
      <path d={`M30 0 V${h}`} stroke={K} strokeWidth="2.5" />
      {Array.from({ length }, (_, i) => {
        const y = i * 40 + 20;
        const left = i % 2 === 0;
        return (
          <g key={i}>
            <path
              d={left ? `M30 ${y} Q12 ${y - 18} 4 ${y - 6} Q14 ${y + 6} 30 ${y}` : `M30 ${y} Q48 ${y - 18} 56 ${y - 6} Q46 ${y + 6} 30 ${y}`}
              fill={i % 3 === 0 ? C.sindoor : C.leaf}
              stroke={K}
              strokeWidth="2"
            />
            <path d={left ? `M30 ${y} L10 ${y - 6}` : `M30 ${y} L50 ${y - 6}`} stroke={K} strokeWidth="1" />
          </g>
        );
      })}
    </svg>
  );
}

/** A Madhubani eye — watchful attention. */
export function Eye(props: MotifProps) {
  return (
    <svg viewBox="0 -6 120 72" aria-hidden {...props}>
      <path d="M6 30 Q60 -14 114 30 Q60 74 6 30 Z" fill={C.pearl} stroke={K} strokeWidth="3" />
      <circle cx="60" cy="30" r="16" fill={C.neel} stroke={K} strokeWidth="2" />
      <circle cx="60" cy="30" r="7" fill={K} />
      <circle cx="56" cy="26" r="2.4" fill={C.pearl} />
      {[0.12, 0.24, 0.36, 0.5, 0.64, 0.76, 0.88].map((t) => {
        const x = (1 - t) ** 2 * 6 + 2 * (1 - t) * t * 60 + t ** 2 * 114;
        const y = (1 - t) ** 2 * 30 + 2 * (1 - t) * t * -14 + t ** 2 * 30;
        return <line key={t} x1={x} y1={y} x2={x + (t - 0.5) * 16} y2={y - 10} stroke={K} strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/** A four-petal flower, used for corners and bullets. */
export function Flower({ color = C.sindoor, ...props }: MotifProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden {...props}>
      {[0, 90, 180, 270].map((r) => (
        <path key={r} transform={`rotate(${r} 20 20)`} d="M20 20 Q12 8 20 2 Q28 8 20 20 Z" fill={color} stroke={K} strokeWidth="1.8" />
      ))}
      {[45, 135, 225, 315].map((r) => (
        <path key={r} transform={`rotate(${r} 20 20)`} d="M20 20 Q16 12 20 8 Q24 12 20 20 Z" fill={C.leaf} stroke={K} strokeWidth="1.4" />
      ))}
      <circle cx="20" cy="20" r="4.5" fill={C.haldi} stroke={K} strokeWidth="1.8" />
    </svg>
  );
}
