import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useLang } from "@/context/LanguageContext";
import { BookButton, scrollToId } from "./cta";

export default function Nav({ onCheckSymptoms }) {
  const { t, lang, setLang, langs } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Below `lg` the hero photo is a full-bleed banner sitting directly under
  // this (transparent, unscrolled) nav, so dark text has no guaranteed
  // contrast there — the subtitle in muted forest-500 was reported
  // unreadable against it. Fix: go light + a dark drop-shadow while
  // unscrolled and below `lg` (the shadow holds up whatever part of the
  // photo lands behind it, bright or dark); `lg:` forces it back to dark
  // since the photo there is a right-hand panel, not a banner behind the
  // nav; and scrolling in the solid cream panel forces it back to dark at
  // every width too. No scrim/wash needed, so the hero stays full-bleed on
  // first load.

  const links = [
    { id: "conditions", label: t.nav.conditions },
    { id: "why", label: t.nav.whyChoose },
    { id: "journey", label: t.nav.journey },
    { id: "resources", label: t.nav.resources },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  // A real page, not a homepage scroll-anchor, so it's a plain Link rather
  // than a scrollToId() button. Rendered the same on every page (including
  // blog pages, which reuse this exact Nav component) so it's always one tap
  // away, from anywhere on the site, back to the article index.
  const blogLink = { href: "/blog", label: t.nav.blog || "Blog" };

  const go = (id) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/85 backdrop-blur-xl border-b border-forest-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <button onClick={() => go("hero")} data-testid="nav-logo" className="whitespace-nowrap text-start leading-tight">
          {/* Name stays at the OLD (pre +20%) size below sm — at phone widths, the
              bigger scaled text-2xl/text-3xl plus whitespace-nowrap pushed total
              nav width past the viewport (confirmed by measurement: right-edge
              controls got clipped at ~375px). Room opens up at sm/lg, so it still
              grows there, just not all the way down at phone width. */}
          <span
            className={`block whitespace-nowrap font-heading text-xl font-semibold tracking-tight transition-colors sm:text-2xl lg:text-3xl ${
              scrolled
                ? "text-forest-900"
                : "text-cream-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] lg:text-forest-900 lg:drop-shadow-none"
            }`}
          >
            Dr. Meisam Lund
          </span>
          <span
            className={`block whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
              scrolled
                ? "text-forest-500"
                : "text-cream-100/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] lg:text-forest-500 lg:drop-shadow-none"
            }`}
          >
            {t.footer.role}
          </span>
        </button>

        {/* Pushed from xl to 2xl, and gap-7 to gap-5: at the larger font sizes
            (see tailwind.config.js fontSize scale), 7 nav items no longer fit
            on one line at the xl breakpoint — they wrapped mid-label ("Why
            Choose" / "Me"). 2xl gives them enough room; below that the
            hamburger menu is used instead. */}
        <div className="hidden items-center gap-5 2xl:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              // Always dark: these only ever render at 2xl (1536px)+, where
              // the hero photo is already off to the right, never behind
              // the nav — so there's no photo-contrast case to handle.
              className="relative whitespace-nowrap text-sm font-medium text-forest-800/90 transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-lime after:transition-all after:duration-300 hover:text-forest-900 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
          <Link
            href={blogLink.href}
            data-testid="nav-link-blog"
            className="relative whitespace-nowrap text-sm font-medium text-forest-800/90 transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-lime after:transition-all after:duration-300 hover:text-forest-900 hover:after:w-full"
          >
            {blogLink.label}
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="language-switcher"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur transition-colors ${
                  scrolled
                    ? "border-forest-900/15 bg-white/50 text-forest-800 hover:bg-white"
                    : "border-cream-100/40 bg-white/10 text-cream-100 hover:bg-white/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] lg:border-forest-900/15 lg:bg-white/50 lg:text-forest-800 lg:hover:bg-white lg:drop-shadow-none"
                }`}
              >
                <Globe className="h-4 w-4" />
                {langs.find((l) => l.code === lang)?.label}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[9rem]">
              {langs.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  data-testid={`lang-option-${l.code}`}
                  onClick={() => setLang(l.code)}
                  className="flex cursor-pointer items-center justify-between gap-3"
                >
                  <span>{l.name}</span>
                  {lang === l.code && <Check className="h-4 w-4 text-lime-dark" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <BookButton label={t.nav.book} testid="nav-book-btn" variant="lime" className="hidden whitespace-nowrap sm:inline-flex" />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border 2xl:hidden ${
              scrolled
                ? "border-forest-900/15 bg-white/50 text-forest-900"
                : "border-cream-100/40 bg-white/10 text-cream-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] lg:border-forest-900/15 lg:bg-white/50 lg:text-forest-900 lg:drop-shadow-none"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-forest-100 bg-cream-100/95 backdrop-blur-xl 2xl:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-xl px-4 py-3 text-start text-sm font-medium text-forest-800 transition-colors hover:bg-forest-100"
                >
                  {l.label}
                </button>
              ))}
              <Link
                href={blogLink.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-start text-sm font-medium text-forest-800 transition-colors hover:bg-forest-100"
              >
                {blogLink.label}
              </Link>
              <div className="mt-3 flex flex-col gap-2">
                <BookButton label={t.nav.book} testid="mobile-book-btn" variant="lime" className="w-full" />
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onCheckSymptoms?.();
                  }}
                  className="rounded-full border border-forest-900/25 px-6 py-3 text-sm font-semibold text-forest-900"
                >
                  {t.nav.checkSymptoms}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
