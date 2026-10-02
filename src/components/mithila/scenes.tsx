import type { SceneKey } from "@/lib/content";
import { C, Eye, Fish, Flower, K, LeafPad, Lotus, Makhana, Patterns, Sun, usePrefix, type MotifProps } from "./motifs";
import { PackFront } from "./pack";

/**
 * Painted Mithila scenes for each step of the makhana journey (400 × 300).
 * Shown wherever a real photo has not been added yet.
 */

function waveLine(y: number, w = 400) {
  let d = `M0 ${y}`;
  for (let x = 0; x < w; x += 50) d += ` q12.5 -8 25 0 t25 0`;
  return d;
}

function Seeds({ points, r = 4.5 }: { points: [number, number][]; r?: number }) {
  return (
    <g>
      {points.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={K} />
          <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.3} fill={C.pearl} opacity="0.8" />
        </g>
      ))}
    </g>
  );
}

/** Small corner flowers & dots that fill empty space — a Madhubani signature. */
function Fillers({ spots }: { spots: [number, number, number?][] }) {
  return (
    <g>
      {spots.map(([x, y, s = 18], i) => (
        <Flower key={i} x={x} y={y} width={s} height={s} color={i % 2 ? C.gulabi : C.sindoor} />
      ))}
    </g>
  );
}

function Farming(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Sun x="296" y="8" width="96" height="96" />
      <Fillers spots={[[14, 14], [40, 40, 14], [120, 18, 14], [250, 30, 16]]} />
      {/* pond */}
      <path d={`${waveLine(128)} V300 H0 Z`} fill="#3f6fb0" stroke={K} strokeWidth="3" />
      <path d={`${waveLine(128)} V300 H0 Z`} fill={`url(#${p}-water)`} />
      <path d={waveLine(140)} fill="none" stroke={K} strokeWidth="1.2" />
      {/* the makhana flower rising */}
      <path d="M150 190 Q146 150 152 108" fill="none" stroke={K} strokeWidth="3" />
      <path d="M150 190 Q146 150 152 108" fill="none" stroke={C.leaf} strokeWidth="1.5" />
      <Lotus x="96" y="40" width="112" height="86" color={C.purple} accent={C.gulabi} />
      <LeafPad x="8" y="150" width="112" height="112" />
      <LeafPad x="224" y="168" width="128" height="128" color="#3c8f48" />
      <LeafPad x="138" y="220" width="78" height="78" />
      <LeafPad x="320" y="130" width="70" height="70" color="#3c8f48" />
      <Fish x="120" y="160" width="104" height="52" color={C.haldi} fin={C.sindoor} />
      <Fish x="12" y="252" width="84" height="42" color={C.gulabi} fin={C.leaf} />
    </svg>
  );
}

function Harvesting(props: MotifProps) {
  const p = usePrefix();
  const mud: [number, number][] = [];
  for (let i = 0; i < 26; i++) mud.push([16 + ((i * 53) % 370), 252 + ((i * 17) % 34)]);
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Fillers spots={[[14, 12], [360, 12], [190, 8, 14]]} />
      {/* water body (cross-section) */}
      <path d={`${waveLine(74)} V244 H0 Z`} fill="#3f6fb0" stroke={K} strokeWidth="3" />
      <path d={`${waveLine(74)} V244 H0 Z`} fill={`url(#${p}-water)`} />
      {/* mud bed */}
      <path d="M0 244 Q100 232 200 244 T400 244 V300 H0 Z" fill={C.earth} stroke={K} strokeWidth="3" />
      <path d="M0 244 Q100 232 200 244 T400 244 V300 H0 Z" fill={`url(#${p}-dots)`} opacity="0.5" />
      <Seeds points={mud} r={4} />
      {/* bamboo gaanj sweeping the bed */}
      <g transform="rotate(28 70 40)">
        <rect x="62" y="0" width="14" height="250" fill={C.haldi} stroke={K} strokeWidth="2.5" />
        {[40, 90, 140, 190].map((y) => (
          <line key={y} x1="62" y1={y} x2="76" y2={y} stroke={K} strokeWidth="2" />
        ))}
      </g>
      {/* basket floating at the surface */}
      <ellipse cx="250" cy="58" rx="78" ry="14" fill={K} />
      <Seeds points={[[214, 54], [228, 50], [242, 53], [256, 49], [270, 54], [284, 50], [236, 58], [262, 58]]} r={5} />
      <path d="M172 60 L328 60 L304 132 L196 132 Z" fill={C.haldi} stroke={K} strokeWidth="3" strokeLinejoin="round" />
      <path d="M172 60 L328 60 L304 132 L196 132 Z" fill={`url(#${p}-weave)`} />
      <path d="M176 72 H324 M186 104 H314" stroke={K} strokeWidth="2" />
      <ellipse cx="250" cy="60" rx="78" ry="14" fill="none" stroke={K} strokeWidth="3" />
      {/* bubbles & fish */}
      {[[120, 120, 5], [130, 150, 3.5], [110, 176, 4.5], [340, 160, 4]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={C.pearl} stroke={K} strokeWidth="1.4" />
      ))}
      <Fish x="200" y="160" width="120" height="60" color={C.gulabi} fin={C.haldi} />
    </svg>
  );
}

function Cleaning(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Sun x="8" y="8" width="72" height="72" />
      <Fillers spots={[[370, 14], [340, 50, 14], [100, 20, 14]]} />
      {/* kalash of water */}
      <g transform="translate(26 120)">
        <path d="M24 16 Q18 0 36 -4 L44 -24 L52 -4 Q70 0 64 16 Z" fill={C.leaf} stroke={K} strokeWidth="2" />
        <path d="M18 24 Q-6 70 20 112 Q44 128 68 112 Q94 70 70 24 Z" fill={C.haldi} stroke={K} strokeWidth="3" />
        <path d="M14 56 H74 M10 76 H78" stroke={K} strokeWidth="1.6" />
        <path d="M12 56 H76 V76 H12Z" fill={`url(#${p}-hatch)`} opacity="0.7" />
        <rect x="14" y="14" width="60" height="12" rx="4" fill={C.sindoor} stroke={K} strokeWidth="2.5" />
        {[24, 40, 56].map((x) => (
          <circle key={x} cx={x + 4} cy="96" r="3" fill={C.sindoor} stroke={K} strokeWidth="1.2" />
        ))}
      </g>
      {/* soop — the winnowing basket */}
      <path d="M128 268 L372 268 L340 164 Q250 132 160 164 Z" fill={C.haldi} stroke={K} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M128 268 L372 268 L340 164 Q250 132 160 164 Z" fill={`url(#${p}-weave)`} />
      <path d="M150 196 Q250 176 350 196" fill="none" stroke={K} strokeWidth="2" />
      <path d="M128 268 L372 268" stroke={C.sindoor} strokeWidth="8" />
      <path d="M128 268 L372 268" stroke={K} strokeWidth="1.6" />
      <Seeds points={[[200, 236], [222, 244], [246, 234], [270, 246], [294, 236], [316, 246], [232, 220], [262, 222], [288, 220]]} r={5.5} />
      {/* seeds tossed up, chaff flying */}
      <Seeds points={[[196, 120], [226, 96], [262, 84], [298, 98], [326, 124]]} r={5} />
      {[[176, 96], [240, 62], [284, 60], [344, 92], [214, 70]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} q6 -6 12 0`} fill="none" stroke={C.earth} strokeWidth="2.4" strokeLinecap="round" />
      ))}
      <path d="M186 142 Q250 60 330 142" fill="none" stroke={K} strokeWidth="1.3" strokeDasharray="3 6" />
    </svg>
  );
}

function Processing(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Fillers spots={[[14, 14], [370, 14], [14, 270], [372, 270]]} />
      {/* chulha */}
      <path d="M104 300 L116 188 H284 L296 300 Z" fill={C.earth} stroke={K} strokeWidth="3" />
      <path d="M104 300 L116 188 H284 L296 300 Z" fill={`url(#${p}-dots)`} opacity="0.45" />
      <path d="M160 300 V258 Q200 214 240 258 V300 Z" fill={K} />
      {/* flames */}
      <path d="M170 300 Q166 270 182 252 Q180 274 192 280 Q190 250 206 236 Q206 262 218 272 Q222 254 232 252 Q236 278 230 300 Z" fill={C.sindoor} stroke={K} strokeWidth="1.8" />
      <path d="M186 300 Q184 284 194 274 Q196 288 204 290 Q206 276 214 270 Q220 288 214 300 Z" fill={C.haldi} stroke={K} strokeWidth="1.4" />
      {/* kadhai */}
      <path d="M86 182 Q200 262 314 182 Z" fill={K} />
      <path d="M96 186 Q200 250 304 186" fill="none" stroke="#5a4a40" strokeWidth="2" />
      <circle cx="80" cy="180" r="9" fill="none" stroke={K} strokeWidth="4" />
      <circle cx="320" cy="180" r="9" fill="none" stroke={K} strokeWidth="4" />
      <ellipse cx="200" cy="182" rx="114" ry="8" fill="#3a2e26" stroke={K} strokeWidth="2.5" />
      <Seeds points={[[160, 182], [178, 180], [196, 183], [214, 180], [232, 182], [250, 180]]} r={4.5} />
      {/* popped makhana flying out */}
      {[
        [118, 70, 46, 0],
        [176, 28, 56, 1],
        [244, 52, 50, 2],
        [300, 96, 40, 0],
        [86, 124, 34, 1],
        [210, 112, 36, 2],
      ].map(([x, y, s, v], i) => (
        <g key={i}>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <line
              key={a}
              x1={x + s / 2 + Math.cos((a * Math.PI) / 180) * (s / 2 + 4)}
              y1={y + s / 2 + Math.sin((a * Math.PI) / 180) * (s / 2 + 4)}
              x2={x + s / 2 + Math.cos((a * Math.PI) / 180) * (s / 2 + 11)}
              y2={y + s / 2 + Math.sin((a * Math.PI) / 180) * (s / 2 + 11)}
              stroke={C.sindoor}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          <Makhana x={x} y={y} width={s} height={s} variant={v} />
        </g>
      ))}
      {/* wooden mallet */}
      <g transform="rotate(-38 350 190)">
        <rect x="344" y="150" width="12" height="110" rx="4" fill={C.haldi} stroke={K} strokeWidth="2.5" />
        <rect x="326" y="120" width="48" height="36" rx="6" fill={C.earth} stroke={K} strokeWidth="2.5" />
        <path d="M326 132 H374 M326 144 H374" stroke={K} strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function Quality(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Fillers spots={[[14, 14], [370, 14], [14, 268], [370, 268], [60, 120, 14], [330, 120, 14]]} />
      <Eye x="130" y="6" width="140" height="84" />
      {/* taraju — the balance */}
      <path d="M150 292 L250 292 L226 270 H174 Z" fill={C.earth} stroke={K} strokeWidth="3" strokeLinejoin="round" />
      <rect x="194" y="104" width="12" height="168" fill={C.haldi} stroke={K} strokeWidth="2.5" />
      <rect x="194" y="104" width="12" height="168" fill={`url(#${p}-hatchv)`} opacity="0.4" />
      <path d="M70 116 H330" stroke={K} strokeWidth="6" strokeLinecap="round" />
      <path d="M70 116 H330" stroke={C.haldi} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="200" cy="112" r="10" fill={C.sindoor} stroke={K} strokeWidth="2.5" />
      {[100, 300].map((x) => (
        <g key={x}>
          <path d={`M${x} 118 L${x - 44} 206 M${x} 118 L${x + 44} 206 M${x} 118 V206`} stroke={K} strokeWidth="1.6" />
          <path d={`M${x - 54} 206 Q${x} 246 ${x + 54} 206 Z`} fill={C.sindoor} stroke={K} strokeWidth="3" />
          <path d={`M${x - 54} 206 Q${x} 246 ${x + 54} 206 Z`} fill={`url(#${p}-hatch)`} opacity="0.35" />
          <Makhana x={x - 44} y="168" width="40" height="40" variant={0} />
          <Makhana x={x - 6} y="164" width="44" height="44" variant={1} />
          <Makhana x={x - 24} y="146" width="36" height="36" variant={2} />
        </g>
      ))}
      {/* approval mark */}
      <circle cx="200" cy="232" r="24" fill={C.leaf} stroke={K} strokeWidth="3" />
      <path d="M188 232 L197 241 L214 222" fill="none" stroke={C.pearl} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Packing(props: MotifProps) {
  const p = usePrefix();
  return (
    <svg viewBox="0 0 400 300" {...props}>
      <defs>
        <Patterns p={p} />
      </defs>
      <rect width="400" height="300" fill={C.paper} />
      <Fillers spots={[[14, 14], [370, 14], [14, 268], [370, 268]]} />
      {/* fish guarding the pack */}
      <Fish x="8" y="150" width="120" height="60" color={C.haldi} fin={C.sindoor} />
      <g transform="translate(392 0) scale(-1 1)">
        <Fish x="0" y="150" width="120" height="60" color={C.gulabi} fin={C.leaf} />
      </g>
      <Lotus x="30" y="60" width="90" height="70" />
      <Lotus x="280" y="60" width="90" height="70" color={C.haldi} accent={C.sindoor} />
      {/* makhana pouring into the pack */}
      {[
        [176, 2, 30, 0],
        [206, 14, 26, 1],
        [186, 34, 22, 2],
      ].map(([x, y, s, v], i) => (
        <Makhana key={i} x={x} y={y} width={s} height={s} variant={v} />
      ))}
      <PackFront x="140" y="58" width="120" height="170" />
      <path d="M118 236 H282" stroke={K} strokeWidth="3" />
      <path d="M100 250 H300" stroke={K} strokeWidth="1.5" strokeDasharray="2 5" />
      <Makhana x="104" y="252" width="36" height="36" variant={0} />
      <Makhana x="260" y="252" width="36" height="36" variant={2} />
      <Makhana x="182" y="256" width="36" height="36" variant={1} />
    </svg>
  );
}

const scenes: Record<SceneKey, (props: MotifProps) => React.ReactElement> = {
  farming: Farming,
  harvesting: Harvesting,
  cleaning: Cleaning,
  processing: Processing,
  quality: Quality,
  packing: Packing,
};

export function Scene({ name, ...props }: MotifProps & { name: SceneKey }) {
  const S = scenes[name];
  return <S role="img" aria-label={`Mithila painting: ${name}`} {...props} />;
}
