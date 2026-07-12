import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { IMAGES } from "@/lib/site";
import { BookButton, SymptomButton } from "./cta";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero({ onCheckSymptoms }) {
  const { t } = useLang();

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Full-bleed background photo (Dr. Meisam — replace with a wide hero shot anytime) */}
      <img
        src={IMAGES.heroDoctor}
        alt="Dr. Meisam Lund"
        className="absolute inset-0 h-full w-full object-cover object-[50%_18%] lg:object-[72%_20%]"
        loading="eager"
        data-testid="hero-bg-image"
      />
      {/* Light, bright overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/50 to-forest-900/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 via-transparent to-forest-900/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            {...fade(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-900"
          >
            {t.hero.overline}
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            className="font-heading text-5xl font-light leading-[1.0] tracking-tight text-cream-100 sm:text-6xl lg:text-7xl"
          >
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...fade(0.3)}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/90 lg:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <BookButton label={t.hero.cta1} testid="hero-book-btn" variant="lime" />
            <SymptomButton
              label={t.hero.cta2}
              onClick={onCheckSymptoms}
              testid="hero-symptom-btn"
              variant="onDark"
            />
          </motion.div>

          <motion.div {...fade(0.55)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5 text-lime">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-lime" />
                ))}
              </div>
              <span className="text-sm text-cream-100/80">{t.hero.rating}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-cream-100/80">
              <MapPin className="h-4 w-4 text-lime" />
              {t.hero.badgeTitle}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
