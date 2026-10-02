import { site } from "@/lib/site";
import { product } from "@/lib/content";
import { C, K, Patterns, usePrefix, type MotifProps } from "./motifs";
import { display, pouch } from "./pack";
import { QR } from "./qr";

/** Illustrated SwadUp 200g pouch — back, with a real QR code to the journey page. */
export function PackBack(props: MotifProps) {
  const p = usePrefix();
  const url = `${site.url}/journey`;
  return (
    <svg viewBox="0 0 300 424" role="img" aria-label="SwadUp Foods Premium Makhana 200g pack, back, with QR code" {...props}>
      <defs>
        <Patterns p={p} />
        <clipPath id={`${p}-pouch`}>
          <path d={pouch} />
        </clipPath>
      </defs>
      <path d={pouch} fill={C.paper} stroke={K} strokeWidth="3.5" />
      <g clipPath={`url(#${p}-pouch)`}>
        <rect x="20" y="14" width="260" height="30" fill={C.sindoor} />
        <rect x="20" y="14" width="260" height="30" fill={`url(#${p}-hatchv)`} opacity="0.4" />
        <line x1="20" y1="44" x2="280" y2="44" stroke={K} strokeWidth="2.5" />
        <rect x="20" y="396" width="260" height="20" fill={C.sindoor} />
      </g>
      <rect x="36" y="56" width="228" height="330" fill="none" stroke={K} strokeWidth="2" />
      <rect x="42" y="62" width="216" height="318" fill="none" stroke={K} strokeWidth="1" />
      <text x="150" y="96" textAnchor="middle" fontSize="26" fill={C.sindoor} style={display}>
        SWADUP FOODS
      </text>
      <text x="150" y="116" textAnchor="middle" fontSize="12" fill={K} fontWeight="700" letterSpacing="1.5">
        {product.name.replace("SwadUp Foods ", "").toUpperCase()}
      </text>
      {product.highlights.map((h, i) => (
        <g key={h} transform={`translate(62 ${144 + i * 22})`}>
          <circle r="4.5" fill={C.haldi} stroke={K} strokeWidth="1.4" />
          <text x="12" y="4" fontSize="11.5" fill={K} fontWeight="600">
            {h}
          </text>
        </g>
      ))}
      <line x1="56" y1="214" x2="244" y2="214" stroke={K} strokeWidth="1" strokeDasharray="2 4" />
      <text x="58" y="234" fontSize="10.5" fill={K} fontWeight="700">
        Ingredients:
      </text>
      <text x="126" y="234" fontSize="10.5" fill={K}>
        Makhana (Fox nut)
      </text>
      <text x="58" y="252" fontSize="10.5" fill={K} fontWeight="700">
        Net weight:
      </text>
      <text x="126" y="252" fontSize="10.5" fill={K}>
        {product.weight}
      </text>
      {/* QR */}
      <rect x="58" y="270" width="92" height="92" fill="#fff" stroke={K} strokeWidth="2" />
      <QR value={url} x="62" y="274" width="84" height="84" />
      <text x="162" y="292" fontSize="12.5" fill={C.sindoor} style={display}>
        Scan me!
      </text>
      {["Discover the", "journey of your", "makhana — from", "farm to home."].map((l, i) => (
        <text key={l} x="162" y={310 + i * 14} fontSize="10" fill={K} fontWeight="600">
          {l}
        </text>
      ))}
    </svg>
  );
}
