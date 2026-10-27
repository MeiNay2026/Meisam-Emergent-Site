import React from "react";
import { MapPin, Clock, Linkedin, Instagram } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { IMAGES, SITE, SOCIALS, telHrefIntl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { BookButton, CallButton, WhatsAppButton } from "./cta";

export default function FinalCTA() {
  const { t } = useLang();
  const f = t.finalCta;

  return (
    <section
      data-testid="final-cta"
      className="grain relative overflow-hidden bg-forest-900 py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${IMAGES.hospitalAmbient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/85 to-forest-900/70" />

      {/* id + scroll-mt moved here from the outer <section> — see Conditions.js
          for why: it keeps the nav-link scroll landing at the content instead
          of at this section's own top padding. */}
      {/* max-w-4xl is too narrow for the heading at its lg:text-6xl size —
          it wraps to 2 lines. Widening the whole block at lg+ (not just the
          heading) keeps the subtitle/buttons visually matched to it, and
          only changes anything at lg+ since the narrow/phone layout below
          that breakpoint is untouched (heading stays allowed to wrap there). */}
      <div id="contact" className="relative scroll-mt-24 mx-auto max-w-4xl px-5 text-center lg:max-w-6xl lg:px-10">
        <Reveal>
          <h2 className="font-heading text-4xl font-light leading-tight tracking-tight text-cream-100 sm:text-5xl lg:text-6xl">
            {f.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-500/85 lg:text-lg">
            {f.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <BookButton label={f.book} testid="final-book-btn" variant="lime" />
            <CallButton label={f.call} />
            <WhatsAppButton label={f.whatsapp} />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-cream-500/70">
            {f.intlNote}{" "}
            <a href={telHrefIntl} className="underline underline-offset-2 hover:text-lime">
              {SITE.phoneIntlDisplay}
            </a>
            . {f.whatsappNote}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-cream-500/80 sm:flex-row sm:gap-10">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-lime" />
              {SITE.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-lime" />
              {f.hours}
            </span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
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
                data-testid={`cta-social-${label.toLowerCase()}`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/30 text-cream-100 transition-colors hover:border-lime hover:bg-lime hover:text-forest-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
