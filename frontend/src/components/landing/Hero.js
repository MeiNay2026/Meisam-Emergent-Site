import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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
      className="relative overflow-hidden pt-28 lg:min-h-screen lg:pt-36"
    >
      <div className="pointer-events-none absolute -top-40 end-[-10%] h-[520px] w-[520px] rounded-full bg-forest-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24">
        {/* Left */}
        <div className="lg:col-span-6">
          <motion.p {...fade(0.05)} className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t.hero.overline}
          </motion.p>

          <motion.h1
            {...fade(0.15)}
            className="font-heading text-5xl font-light leading-[1.02] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl"
          >
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p {...fade(0.3)} className="mt-7 max-w-xl text-base leading-relaxed text-forest-700/80 lg:text-lg">
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...fade(0.42)} className="mt-9 flex flex-wrap items-center gap-3">
            <BookButton label={t.hero.cta1} testid="hero-book-btn" />
            <SymptomButton label={t.hero.cta2} onClick={onCheckSymptoms} testid="hero-symptom-btn" />
          </motion.div>

          <motion.div {...fade(0.55)} className="mt-9 flex items-center gap-3">
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" />
              ))}
            </div>
            <span className="text-sm text-forest-700/70">{t.hero.rating}</span>
          </motion.div>
        </div>

        {/* Right — doctor photo + badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-forest-100 shadow-2xl shadow-forest-900/10 lg:ms-auto lg:me-0">
            <img
              src={IMAGES.heroDoctor}
              alt="Dr. Meisam Lund"
              className="h-[440px] w-full object-cover object-top sm:h-[560px]"
              loading="eager"
            />
          </div>

          <div
            className="absolute bottom-6 start-0 w-64 rounded-2xl border border-white/10 bg-forest-900/95 p-6 shadow-xl backdrop-blur-md sm:start-[-24px]"
            data-testid="hero-badge"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream-500/70">
              {t.hero.badgeTitle}
            </p>
            <div className="mt-4 space-y-1.5 font-heading text-2xl font-light leading-tight text-cream-100">
              {t.hero.badgeWords.map((w, i) => (
                <div key={i}>{w}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
