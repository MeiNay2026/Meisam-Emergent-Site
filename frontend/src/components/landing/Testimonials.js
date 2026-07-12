import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

const initials = (name) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

export default function Testimonials() {
  const { t, isRTL } = useLang();
  const tm = t.testimonials;
  const [idx, setIdx] = useState(0);
  const count = tm.items.length;

  const go = (dir) => setIdx((p) => (p + dir + count) % count);
  const item = tm.items[idx];

  const Prev = isRTL ? ChevronRight : ChevronLeft;
  const Next = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section
      data-testid="testimonials-section"
      className="scroll-mt-24 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-10">
        <Reveal>
          <Overline>{tm.overline}</Overline>
          <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
            {tm.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-700/80">{tm.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-14">
            <Quote className="mx-auto h-10 w-10 text-forest-100" />
            <div className="mt-4 min-h-[190px] sm:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  data-testid="testimonial-quote"
                >
                  <p className="mx-auto max-w-3xl font-heading text-2xl font-light italic leading-snug text-forest-900 sm:text-3xl">
                    “{item.quote}”
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-sm font-semibold text-cream-100">
                      {initials(item.name)}
                    </div>
                    <div className="text-start">
                      <div className="text-sm font-semibold text-forest-900">{item.name}</div>
                      <div className="text-xs text-forest-500">{item.location}</div>
                    </div>
                  </div>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                data-testid="testimonial-prev"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-100 text-forest-800 transition-colors hover:bg-forest-100"
                aria-label="Previous"
              >
                <Prev className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {tm.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    data-testid={`testimonial-dot-${i}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === idx ? "w-6 bg-forest-900" : "w-2 bg-forest-100"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                data-testid="testimonial-next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-100 text-forest-800 transition-colors hover:bg-forest-100"
                aria-label="Next"
              >
                <Next className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
