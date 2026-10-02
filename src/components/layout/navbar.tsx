"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, ShoppingBag, X } from "lucide-react";
import clsx from "clsx";
import { nav } from "@/lib/site";
import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border-[2.5px] border-kohl bg-pearl/95 py-1.5 pr-1.5 pl-2 backdrop-blur transition-shadow duration-300",
          scrolled ? "shadow-[4px_4px_0_var(--kohl)]" : "shadow-[2px_2px_0_var(--kohl)]",
        )}
      >
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                    active ? "bg-kohl text-haldi" : "text-kohl/80 hover:bg-paper-deep hover:text-kohl",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="/buy"
            className="hidden items-center gap-2 rounded-full border-2 border-kohl bg-sindoor px-5 py-2.5 text-sm font-extrabold text-pearl transition hover:bg-sindoor-deep sm:inline-flex"
          >
            <ShoppingBag className="size-4" /> Buy Now
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border-2 border-kohl bg-haldi text-kohl lg:hidden"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border-[2.5px] border-kohl bg-pearl p-3 shadow-[4px_4px_0_var(--kohl)] lg:hidden"
          >
            <ul className="flex flex-col">
              {[...nav, { href: "/buy", label: "Buy Now" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "font-display block rounded-2xl px-4 py-3.5 text-2xl",
                      pathname === item.href ? "bg-kohl text-haldi" : item.href === "/buy" ? "text-sindoor" : "text-kohl hover:bg-paper",
                    )}
                  >
                    {item.label}
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
