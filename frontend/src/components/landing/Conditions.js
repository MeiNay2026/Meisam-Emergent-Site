import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Layers, Droplet, Activity, Scale, Microscope, Siren, Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

const ICONS = {
  hernia: Layers,
  gallbladder: Droplet,
  gi: Activity,
  weightloss: Scale,
  endoscopy: Microscope,
  emergency: Siren,
};

export default function Conditions() {
  const { t } = useLang();
  const c = t.conditions;
  const [open, setOpen] = useState(null);

  return (
    <section
      id="conditions"
      data-testid="conditions-section"
      className="scroll-mt-24 bg-cream-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline>{c.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
              {c.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-700/80">{c.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.items.map((it, i) => {
            const Icon = ICONS[it.id] || Layers;
            const isOpen = open === it.id;
            return (
              <Reveal key={it.id} delay={(i % 3) * 0.08}>
                <motion.div
                  layout
                  data-testid={`condition-card-${it.id}`}
                  className={`flex h-full flex-col rounded-3xl border bg-white p-7 transition-all duration-300 ${
                    isOpen
                      ? "border-forest-300 shadow-xl shadow-forest-900/10"
                      : "border-forest-100 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100/60">
                    <Icon className="h-5 w-5 text-forest-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-forest-900">{it.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">{it.short}</p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-forest-700/80">{it.long}</p>
                        <ul className="mt-4 space-y-2">
                          {it.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm text-forest-800">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpen(isOpen ? null : it.id)}
                    data-testid={`condition-toggle-${it.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors hover:text-gold"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    {isOpen ? c.close : c.learnMore}
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
