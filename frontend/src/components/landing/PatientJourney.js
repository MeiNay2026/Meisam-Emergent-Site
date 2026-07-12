import React from "react";
import { motion } from "framer-motion";
import { MessagesSquare, Search, Users, Scissors, HeartHandshake } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

const ICONS = [MessagesSquare, Search, Users, Scissors, HeartHandshake];

export default function PatientJourney() {
  const { t } = useLang();
  const j = t.journey;

  return (
    <section
      id="journey"
      data-testid="journey-section"
      className="scroll-mt-24 bg-cream-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline>{j.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
              {j.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-700/80">{j.subtitle}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute inset-x-0 top-7 hidden h-px bg-forest-100 lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {j.steps.map((step, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center" data-testid={`journey-step-${i}`}>
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-forest-100 bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-forest-700" strokeWidth={1.5} />
                      <span className="absolute -end-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest-900 text-[11px] font-bold text-cream-100">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-medium text-forest-900">{step.title}</h3>
                    <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-forest-700/75">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
