import clsx from "clsx";
import { site } from "@/lib/site";

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.2V10H7v4h3v7h4v-7h3l1-4h-4V8.6c0-.4.3-.6 1-.6z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z" />
    </svg>
  ),
};

const labels = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube" } as const;

/** Social links. Accounts without a URL yet render as "coming soon". */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={clsx("flex flex-wrap gap-3", className)}>
      {(Object.keys(labels) as (keyof typeof labels)[]).map((k) => {
        const href = site.social[k];
        const inner = (
          <>
            {icons[k]}
            <span className="text-sm font-bold">{labels[k]}</span>
          </>
        );
        const cls =
          "inline-flex items-center gap-2 rounded-full border-2 border-paper/25 px-4 py-2 transition";
        return (
          <li key={k}>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className={clsx(cls, "hover:border-haldi hover:text-haldi")}>
                {inner}
              </a>
            ) : (
              <span className={clsx(cls, "cursor-default opacity-60")} title="Coming soon">
                {inner}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
