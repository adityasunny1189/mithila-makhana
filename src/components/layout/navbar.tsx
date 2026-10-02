"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Radio, X } from "lucide-react";
import clsx from "clsx";
import { nav } from "@/lib/site";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2 pl-4 transition-all duration-500 sm:pl-5",
          scrolled
            ? "border-pond/10 bg-pearl/85 shadow-[0_12px_40px_-18px_rgba(31,61,43,0.45)] backdrop-blur-xl"
            : "border-pond/5 bg-pearl/70 backdrop-blur-md",
        )}
        aria-label="Main"
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active ? "bg-pond text-pearl" : "text-pond/80 hover:bg-pond/5 hover:text-pond",
                  )}
                >
                  {item.href === "/live" && (
                    <span className="relative flex size-2">
                      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-sindoor" />
                      <span className="relative size-2 rounded-full bg-sindoor" />
                    </span>
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="/bulk"
            className="hidden rounded-full bg-sindoor px-5 py-2.5 text-sm font-bold text-pearl transition hover:bg-sindoor-deep sm:inline-flex"
          >
            Bulk enquiry
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-pond text-pearl lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-pond/10 bg-pearl p-3 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col">
              {[...nav, { href: "/bulk", label: "Bulk & Wholesale" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl",
                      pathname === item.href ? "bg-pond text-pearl" : "text-pond hover:bg-cream",
                    )}
                  >
                    {item.label}
                    {item.href === "/live" && <Radio className="size-5 text-sindoor" />}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
