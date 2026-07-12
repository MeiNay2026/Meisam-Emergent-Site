import React, { useState, useEffect } from "react";
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

  const light = false; // hero now has a light cream canvas, so nav uses dark text

  const links = [
    { id: "conditions", label: t.nav.conditions },
    { id: "why", label: t.nav.whyChoose },
    { id: "journey", label: t.nav.journey },
    { id: "resources", label: t.nav.resources },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

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
        <button onClick={() => go("hero")} data-testid="nav-logo" className="text-start leading-tight">
          <span className={`block font-heading text-2xl font-semibold tracking-tight transition-colors sm:text-3xl ${light ? "text-cream-100" : "text-forest-900"}`}>
            Dr. Meisam Lund
          </span>
          <span className={`block text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${light ? "text-cream-100/70" : "text-forest-500"}`}>
            {t.footer.role}
          </span>
        </button>

        <div className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-lime after:transition-all after:duration-300 hover:after:w-full ${
                light ? "text-cream-100/90 hover:text-white" : "text-forest-800/90 hover:text-forest-900"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                data-testid="language-switcher"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold backdrop-blur transition-colors ${
                  light
                    ? "border-cream-100/40 bg-white/10 text-cream-100 hover:bg-white/20"
                    : "border-forest-900/15 bg-white/50 text-forest-800 hover:bg-white"
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

          <BookButton label={t.nav.book} testid="nav-book-btn" variant="lime" className="hidden sm:inline-flex" />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border xl:hidden ${
              light ? "border-cream-100/40 bg-white/10 text-cream-100" : "border-forest-900/15 bg-white/50 text-forest-900"
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
            className="overflow-hidden border-t border-forest-100 bg-cream-100/95 backdrop-blur-xl xl:hidden"
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
