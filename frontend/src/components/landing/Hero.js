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
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream-100 lg:flex-row lg:items-stretch"
    >
      {/* Photo: banner on top for mobile, anchored right full-height on desktop */}
      <div className="absolute inset-x-0 top-0 h-[54vh] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[58%]">
        <img
          src={IMAGES.heroDoctor}
          alt="Dr. Meisam Lund"
          className="h-full w-full object-cover object-[center_12%] lg:object-[30%_15%]"
          loading="eager"
          data-testid="hero-bg-image"
        />
        {/* soft blend into the cream canvas (no heavy shadow over his face) */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/10 to-transparent lg:bg-gradient-to-r lg:from-cream-100 lg:via-cream-100/5 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-end px-5 pb-14 pt-[52vh] lg:items-center lg:px-10 lg:pb-0 lg:pt-36">
        <div className="max-w-xl">
          <motion.p
            {...fade(0.05)}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-900"
          >
            {t.hero.overline}
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            className="font-heading text-5xl font-light leading-[1.0] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl"
          >
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...fade(0.3)}
            className="mt-7 max-w-lg text-base leading-relaxed text-forest-700 lg:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <BookButton label={t.hero.cta1} testid="hero-book-btn" variant="lime" />
            <SymptomButton
              label={t.hero.cta2}
              onClick={onCheckSymptoms}
              testid="hero-symptom-btn"
              variant="light"
            />
          </motion.div>

          <motion.div {...fade(0.55)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <span className="text-sm text-forest-700/80">{t.hero.rating}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm text-forest-700/80">
              <MapPin className="h-4 w-4 text-gold" />
              {t.hero.badgeTitle}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
