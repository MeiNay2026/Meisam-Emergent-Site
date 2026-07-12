import React from "react";
import { ShieldCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

export default function Insurance() {
  const { t } = useLang();
  const ins = t.insurance;

  return (
    <section
      data-testid="insurance-section"
      className="scroll-mt-24 bg-cream-100 py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="rounded-[2.5rem] border border-forest-100 bg-white p-8 sm:p-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <Overline>{ins.overline}</Overline>
                <h2 className="mt-5 font-heading text-3xl font-light leading-tight tracking-tight text-forest-900 sm:text-4xl">
                  {ins.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-forest-700/80">{ins.subtitle}</p>
                <div className="mt-6 flex items-start gap-3 text-sm text-forest-700">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{ins.note}</span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {ins.providers.map((p, i) => (
                    <div
                      key={i}
                      data-testid={`insurance-provider-${i}`}
                      className="flex h-16 items-center justify-center rounded-2xl border border-forest-100 bg-cream-100 px-3 text-center text-sm font-semibold text-forest-800/80 transition-colors hover:border-forest-300 hover:text-forest-900"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
