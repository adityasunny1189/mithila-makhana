import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "outline" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-sindoor text-pearl hover:bg-sindoor-deep",
  secondary: "bg-haldi text-kohl hover:brightness-95",
  outline: "bg-pearl text-kohl hover:bg-paper-deep",
  light: "bg-pearl text-kohl hover:bg-haldi",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

/** Chunky Madhubani-style button: kohl outline with an offset ink shadow. */
export function ButtonLink({ href, children, variant = "primary", className, external }: Props) {
  const cls = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-kohl px-6 py-3 text-sm font-extrabold tracking-wide shadow-[4px_4px_0_var(--kohl)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--kohl)] active:translate-y-0.5 active:shadow-[2px_2px_0_var(--kohl)]",
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
