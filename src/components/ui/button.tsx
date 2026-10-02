import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary: "bg-sindoor text-pearl hover:bg-sindoor-deep shadow-[0_10px_30px_-10px_rgba(194,65,45,0.7)]",
  secondary: "bg-pond text-pearl hover:bg-pond-deep",
  ghost: "border border-pond/25 text-pond hover:border-pond hover:bg-pond/5",
  light: "bg-pearl text-pond hover:bg-cream",
  "outline-light": "border border-pearl/40 text-pearl hover:border-pearl hover:bg-pearl/10",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "primary", className, external }: Props) {
  const cls = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5",
    styles[variant],
    className,
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
