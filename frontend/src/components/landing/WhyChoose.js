import React from "react";
import { Compass, Globe2, Scissors, BookOpen, HeartPulse, RefreshCw } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

const ICONS = [Compass, Globe2, Scissors, BookOpen, HeartPulse, RefreshCw];

export default function WhyChoose() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section
      id="why"
      data-testid="why-choose"
      className="grain relative scroll-mt-24 overflow-hidden bg-forest-900 py-24 text-cream-100 lg:py-32"
    >
      <div className="pointer-events-none absolute -bottom-32 -start-24 h-[400px] w-[400px] rounded-full bg-forest-700/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <Overline>{w.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-cream-100 sm:text-5xl">
              {w.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-500/80 lg:text-lg">
              {w.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {w.items.map((it, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div data-testid={`why-item-${i}`} className="group">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-100/5 ring-1 ring-cream-100/15 transition-colors group-hover:bg-cream-100/10">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-heading text-2xl font-normal text-cream-100">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-500/75">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
