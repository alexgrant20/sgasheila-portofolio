"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="font-display text-2xl italic tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-teal-soft hover:text-teal-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper md:hidden"
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-cream px-6 pb-6 pt-2 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Primary mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
