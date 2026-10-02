import { useId } from "react";
import clsx from "clsx";

/** Deterministic pseudo-random so server and client render the same shapes. */
function rand(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

type ArtProps = { className?: string; style?: React.CSSProperties };

/** A popped makhana: an off-white, slightly lumpy pearl with brown husk patches. */
export function Pearl({
  seed = 1,
  className,
  style,
  husk = true,
}: ArtProps & { seed?: number; husk?: boolean }) {
  const id = useId().replace(/:/g, "");
  const r = rand(seed);
  // Lumpy outline: 10 points around a circle
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2;
    const rad = 44 + r() * 5;
    return [50 + Math.cos(a) * rad, 50 + Math.sin(a) * rad];
  });
  const d =
    pts
      .map((p, i) => {
        const next = pts[(i + 1) % pts.length];
        const mx = (p[0] + next[0]) / 2;
        const my = (p[1] + next[1]) / 2;
        return `${i === 0 ? `M${mx.toFixed(1)},${my.toFixed(1)}` : ""} Q${next[0].toFixed(1)},${next[1].toFixed(1)} ${(
          (next[0] + pts[(i + 2) % pts.length][0]) /
          2
        ).toFixed(1)},${((next[1] + pts[(i + 2) % pts.length][1]) / 2).toFixed(1)}`;
      })
      .join(" ") + " Z";
  const patches = husk
    ? Array.from({ length: 3 + Math.floor(r() * 3) }, () => ({
        cx: 22 + r() * 56,
        cy: 22 + r() * 56,
        rx: 4 + r() * 9,
        ry: 3 + r() * 6,
        rot: r() * 180,
        o: 0.55 + r() * 0.4,
      }))
    : [];
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <defs>
        <radialGradient id={`pg${id}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f6efe2" />
          <stop offset="100%" stopColor="#d9c9ac" />
        </radialGradient>
        <radialGradient id={`ph${id}`} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8a5b36" />
          <stop offset="100%" stopColor="#5b3a22" />
        </radialGradient>
        <clipPath id={`pc${id}`}>
          <path d={d} />
        </clipPath>
      </defs>
      <path d={d} fill={`url(#pg${id})`} />
      <g clipPath={`url(#pc${id})`}>
        {patches.map((p, i) => (
          <ellipse
            key={i}
            cx={p.cx}
            cy={p.cy}
            rx={p.rx}
            ry={p.ry}
            transform={`rotate(${p.rot} ${p.cx} ${p.cy})`}
            fill={`url(#ph${id})`}
            opacity={p.o}
          />
        ))}
        <ellipse cx="34" cy="28" rx="14" ry="8" fill="#fff" opacity="0.7" />
      </g>
      <path d={d} fill="none" stroke="#c7b28e" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

/** Madhubani-style lotus (the purple Euryale bloom, stylised). */
export function Lotus({ className, style, color = "#c2412d", accent = "#e3a82b" }: ArtProps & { color?: string; accent?: string }) {
  const petals = [-60, -30, 0, 30, 60];
  return (
    <svg viewBox="0 0 200 160" className={className} style={style} aria-hidden>
      <g transform="translate(100 120)">
        {petals.map((a, i) => (
          <g key={a} transform={`rotate(${a})`}>
            <path
              d="M0 0 C -22 -30 -18 -78 0 -100 C 18 -78 22 -30 0 0 Z"
              fill={i % 2 ? accent : color}
              stroke="#1d2a22"
              strokeWidth="2.5"
            />
            <path d="M0 -10 C -8 -35 -6 -65 0 -82 C 6 -65 8 -35 0 -10" fill="none" stroke="#1d2a22" strokeWidth="1.5" />
            {[25, 45, 65].map((y) => (
              <circle key={y} cx="0" cy={-y} r="2.2" fill="#1d2a22" />
            ))}
          </g>
        ))}
        <path d="M-70 0 Q0 30 70 0" fill="none" stroke="#1d2a22" strokeWidth="3" />
        <path d="M-60 8 Q0 34 60 8" fill="none" stroke="#1d2a22" strokeWidth="2" strokeDasharray="2 5" />
      </g>
    </svg>
  );
}

/** Madhubani fish — a symbol of fertility and good fortune in Mithila art. */
export function Fish({ className, style, color = "#e3a82b" }: ArtProps & { color?: string }) {
  return (
    <svg viewBox="0 0 220 110" className={className} style={style} aria-hidden>
      <path
        d="M20 55 C 60 0 140 0 175 55 C 140 110 60 110 20 55 Z"
        fill={color}
        stroke="#1d2a22"
        strokeWidth="3"
      />
      <path d="M175 55 L 210 20 L 200 55 L 210 90 Z" fill={color} stroke="#1d2a22" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="52" cy="48" r="8" fill="#fff" stroke="#1d2a22" strokeWidth="2.5" />
      <circle cx="52" cy="48" r="3.5" fill="#1d2a22" />
      <path d="M75 20 Q 68 55 75 90" fill="none" stroke="#1d2a22" strokeWidth="2.5" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <path
            key={`${row}-${col}`}
            d={`M${88 + col * 16} ${30 + row * 14} q 7 7 0 14`}
            fill="none"
            stroke="#1d2a22"
            strokeWidth="1.8"
          />
        )),
      )}
      <path d="M205 22 L 200 55 L 205 88" fill="none" stroke="#1d2a22" strokeWidth="1.5" strokeDasharray="3 4" />
    </svg>
  );
}

/** The giant floating leaf of Euryale ferox, seen from above. */
export function LeafPad({ className, style, color = "#4f7a4a" }: ArtProps & { color?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
      <defs>
        <radialGradient id={`lp${id}`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1f3d2b" />
        </radialGradient>
      </defs>
      <path d="M100 100 L 100 6 A 94 94 0 1 1 88 6.8 Z" fill={`url(#lp${id})`} />
      {Array.from({ length: 18 }, (_, i) => {
        const a = (i / 18) * Math.PI * 2 - Math.PI / 2 + 0.15;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos(a) * 88}
            y2={100 + Math.sin(a) * 88}
            stroke="#a9c79a"
            strokeOpacity="0.35"
            strokeWidth="1.2"
          />
        );
      })}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#a9c79a" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="100" cy="100" r="5" fill="#a9c79a" opacity="0.6" />
    </svg>
  );
}

/** Repeating Madhubani border band (triangles, dots and double lines). */
export function BorderBand({
  className,
  color = "#1d2a22",
  fill = "#c2412d",
}: {
  className?: string;
  color?: string;
  fill?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={clsx("block w-full", className)} height="28" aria-hidden preserveAspectRatio="none">
      <defs>
        <pattern id={`bb${id}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2" x2="28" y2="2" stroke={color} strokeWidth="2" />
          <line x1="0" y1="26" x2="28" y2="26" stroke={color} strokeWidth="2" />
          <path d="M2 24 L14 6 L26 24 Z" fill={fill} stroke={color} strokeWidth="1.5" />
          <circle cx="14" cy="18" r="2" fill={color} />
          <circle cx="0" cy="14" r="1.6" fill={color} />
          <circle cx="28" cy="14" r="1.6" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="28" fill={`url(#bb${id})`} />
    </svg>
  );
}

/** Madhubani sun — rays and concentric rings. */
export function Sun({ className, style }: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden>
      <g transform="translate(100 100)">
        {Array.from({ length: 16 }, (_, i) => (
          <path
            key={i}
            transform={`rotate(${(i * 360) / 16})`}
            d="M-8 -52 L0 -92 L8 -52 Z"
            fill={i % 2 ? "#c2412d" : "#e3a82b"}
            stroke="#1d2a22"
            strokeWidth="2"
          />
        ))}
        <circle r="50" fill="#e3a82b" stroke="#1d2a22" strokeWidth="2.5" />
        <circle r="38" fill="none" stroke="#1d2a22" strokeWidth="1.5" strokeDasharray="2 4" />
        <circle r="26" fill="#c2412d" stroke="#1d2a22" strokeWidth="2" />
        <circle r="10" fill="#1d2a22" />
      </g>
    </svg>
  );
}

/** A small cluster of pearls for decorative use. */
export function PearlCluster({ className, count = 7, seed = 3 }: { className?: string; count?: number; seed?: number }) {
  const r = rand(seed);
  const items = Array.from({ length: count }, (_, i) => ({
    left: r() * 80,
    top: r() * 70,
    size: 12 + r() * 18,
    rot: r() * 360,
    s: seed * 10 + i,
  }));
  return (
    <div className={className} aria-hidden>
      {items.map((p) => (
        <Pearl
          key={p.s}
          seed={p.s}
          className="absolute drop-shadow-[0_6px_8px_rgba(70,45,20,0.25)]"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: `${p.size}%`, transform: `rotate(${p.rot}deg)` }}
        />
      ))}
    </div>
  );
}
