import { product } from "@/lib/content";
import { C, K, Makhana, Patterns, usePrefix, type MotifProps } from "./motifs";

export const pouch = "M20 34 Q20 14 40 14 H260 Q280 14 280 34 V392 Q280 410 262 410 H38 Q20 410 20 392 Z";
export const display = { fontFamily: "var(--font-yatra), serif" } as const;

/** Illustrated SwadUp 200g pouch — front. Replace with a real photo via `product.images.front`. */
export function PackFront(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 300 424" role="img" aria-label="SwadUp Foods Premium Makhana 200g pack, front" {...props}>
      <defs>
        <Patterns p={p} />
        <clipPath id={`${p}-pouch`}>
          <path d={pouch} />
        </clipPath>
      </defs>
      <path d={pouch} fill={C.sindoor} stroke={K} strokeWidth="3.5" />
      <g clipPath={`url(#${p}-pouch)`}>
        {/* crimp */}
        <rect x="20" y="14" width="260" height="30" fill={`url(#${p}-hatchv)`} opacity="0.45" />
        <line x1="20" y1="44" x2="280" y2="44" stroke={K} strokeWidth="2.5" />
        {/* side bands */}
        {[34, 266].map((x) => (
          <g key={x}>
            <line x1={x - 8} y1="52" x2={x - 8} y2="404" stroke={K} strokeWidth="1.4" />
            <line x1={x + 8} y1="52" x2={x + 8} y2="404" stroke={K} strokeWidth="1.4" />
            {Array.from({ length: 22 }, (_, i) => (
              <path key={i} d={`M${x - 8} ${56 + i * 16} L${x} ${64 + i * 16} L${x + 8} ${56 + i * 16}`} fill={i % 2 ? C.haldi : C.pearl} stroke={K} strokeWidth="1.2" />
            ))}
          </g>
        ))}
        {/* subtle sheen */}
        <path d="M60 50 Q48 230 70 404 L90 404 Q70 230 82 50 Z" fill="#fff" opacity="0.07" />
      </g>
      <path d="M268 54 h12 v8 h-12 z" fill={C.paper} />
      {/* brand */}
      <text x="150" y="98" textAnchor="middle" fontSize="50" fill={C.pearl} stroke={K} strokeWidth="5" paintOrder="stroke" style={display}>
        SWADUP
      </text>
      <text x="150" y="122" textAnchor="middle" fontSize="15" letterSpacing="9" fill={C.haldi} fontWeight="800">
        FOODS
      </text>
      {/* window */}
      <circle cx="150" cy="218" r="82" fill={`url(#${p}-hatch)`} stroke={K} strokeWidth="3" />
      <circle cx="150" cy="218" r="82" fill={C.haldi} opacity="0.55" />
      <circle cx="150" cy="218" r="72" fill={C.pearl} stroke={K} strokeWidth="2" />
      <circle cx="150" cy="218" r="77" fill="none" stroke={K} strokeWidth="1" strokeDasharray="1 5" strokeLinecap="round" />
      <Makhana x="92" y="160" width="62" height="62" variant={0} />
      <Makhana x="150" y="166" width="54" height="54" variant={1} />
      <Makhana x="104" y="214" width="56" height="56" variant={2} />
      <Makhana x="156" y="218" width="58" height="58" variant={0} />
      <Makhana x="130" y="250" width="40" height="40" variant={1} />
      {/* ribbon */}
      <path d="M50 314 H250 L238 332 L250 350 H50 L62 332 Z" fill={C.haldi} stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      <text x="150" y="339" textAnchor="middle" fontSize="18" fill={K} style={display}>
        PREMIUM MAKHANA
      </text>
      <text x="150" y="372" textAnchor="middle" fontSize="12.5" fill={C.pearl} fontWeight="700" letterSpacing="1">
        From Farm to Your Home
      </text>
      <text x="150" y="394" textAnchor="middle" fontSize="11" fill={C.haldi} fontWeight="800" letterSpacing="2">
        NET WT. {product.weight}
      </text>
    </svg>
  );
}
