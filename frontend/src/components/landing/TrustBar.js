import React from "react";
import { Award, GraduationCap, Activity, Scissors, Shield, Building2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const ICONS = [Award, GraduationCap, Activity, Scissors, Shield, Building2];

export default function TrustBar() {
  const { t } = useLang();
  const items = t.trust.items;

  return (
    <section
      data-testid="trust-bar"
      className="border-y border-forest-100 bg-white/60"
    >
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((label, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={i}
                  data-testid={`trust-item-${i}`}
                  className="flex flex-col items-center gap-2.5 text-center"
                >
                  <Icon className="h-6 w-6 text-forest-500" strokeWidth={1.4} />
                  <span className="text-[11px] font-semibold uppercase leading-tight tracking-[0.12em] text-forest-800/80">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
