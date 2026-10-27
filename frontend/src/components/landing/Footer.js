import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { SITE, SOCIALS, telHref, telHrefIntl, waHref } from "@/lib/site";
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
        {/* sectionDivider: on narrow/phone view (flex-col) the four blocks
            below used to run together with nothing but a gap between them —
            a rule line + top padding on every block but the first gives
            each one a clear boundary. At lg+ the row layout already
            separates them with whitespace, so the rule is switched off
            there. */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="border-t border-forest-100 pt-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:pt-0">
            <div className="font-heading text-2xl font-semibold tracking-tight text-forest-900">
              {SITE.doctorName}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-forest-500">
              {t.footer.role}
            </div>
            {/* max-w-xs forced an awkward break ("...Personal" / "care.")
                partway through the last of the three short sentences. At
                lg+ this column sits in a justify-between row with plenty of
                real space around it, but a flex item with no explicit width
                still shrink-wraps its text by default — so even after
                dropping max-w-xs it kept wrapping. lg:whitespace-nowrap
                makes the one-line width the column's minimum, which the
                row has room for; below lg it's free to wrap by whole words
                instead of at a fixed, arbitrary point. */}
            <p className="mt-4 font-heading text-lg font-light italic text-forest-700/80 lg:whitespace-nowrap">
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 border-t border-forest-100 pt-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:pt-0">
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

          <div className="border-t border-forest-100 pt-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:pt-0">
            <div className="mb-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-forest-700">
              {t.footer.contactTitle}
            </div>
            <div className="space-y-1.5 text-sm text-forest-800/90">
              <div>
                <a href={telHref} className="font-medium hover:text-forest-900 hover:underline">
                  {SITE.phoneDisplay}
                </a>{" "}
                <span className="text-forest-500">({t.footer.uae})</span>
              </div>
              <div>
                <a href={telHrefIntl} className="hover:text-forest-900 hover:underline">
                  {SITE.phoneIntlDisplay}
                </a>{" "}
                <span className="text-forest-500">({t.footer.intl})</span>
              </div>
              <div>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:text-forest-900 hover:underline">
                  {t.footer.whatsappLabel}
                </a>
              </div>
              <div className="pt-1 text-forest-500">{SITE.location}</div>
            </div>
          </div>

          <div className="border-t border-forest-100 pt-8 first:border-t-0 first:pt-0 lg:border-t-0 lg:pt-0">
            {/* Bolder + darker, same as the Contact label above it, so both
                read as section headings rather than blending into the body
                text beneath them. */}
            <div className="mb-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-forest-700">
              {t.footer.followMe}
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
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
