import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SITE } from "@/lib/site";
import { scrollToId } from "./cta";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { id: "conditions", label: t.nav.conditions },
    { id: "why", label: t.nav.whyChoose },
    { id: "journey", label: t.nav.journey },
    { id: "resources", label: t.nav.resources },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer data-testid="site-footer" className="border-t border-forest-100 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-heading text-2xl font-semibold tracking-tight text-forest-900">
              {SITE.doctorName}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-forest-500">
              {t.footer.role}
            </div>
            <p className="mt-4 max-w-xs font-heading text-lg font-light italic text-forest-700/80">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="text-sm font-medium text-forest-800/80 transition-colors hover:text-forest-900"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-500">
              {t.footer.followMe}
            </div>
            <div className="flex gap-3">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-100 text-forest-700 transition-colors hover:bg-forest-900 hover:text-cream-100"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-forest-100 pt-6 text-xs text-forest-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.doctorName}. {t.footer.rights}</span>
          <span>{t.footer.practising}</span>
        </div>
      </div>
    </footer>
  );
}
