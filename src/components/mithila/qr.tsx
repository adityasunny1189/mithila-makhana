import QRCode from "qrcode";

/** A real, scannable QR code rendered as an SVG path. */
export function QR({ value, color = "#1b1410", ...props }: React.SVGProps<SVGSVGElement> & { value: string; color?: string }) {
  const { modules } = QRCode.create(value, { errorCorrectionLevel: "M" });
  const n = modules.size;
  let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (modules.get(r, c)) d += `M${c} ${r}h1v1h-1z`;
  return (
    <svg viewBox={`-2 -2 ${n + 4} ${n + 4}`} shapeRendering="crispEdges" role="img" aria-label={`QR code for ${value}`} {...props}>
      <rect x="-2" y="-2" width={n + 4} height={n + 4} fill="#fff" />
      <path d={d} fill={color} />
    </svg>
  );
}
