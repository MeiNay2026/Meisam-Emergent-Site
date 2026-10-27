import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Layers, Droplet, Activity, Scale, Microscope, Siren, Check, ArrowRight } from "lucide-react";
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

// Maps a condition card's id to its dedicated, deeply-optimized procedure
// page (see src/lib/conditionPages.js) when one exists. Not every card has
// one yet — only the current highest case-volume priorities do — so this is
// checked before rendering the "Read the full guide" link.
const DEDICATED_PAGES = {
  hernia: "hernia-surgery",
  gallbladder: "gallbladder-surgery",
  emergency: "appendicitis-emergency-surgery",
  gi: "stomach-bowel-conditions",
  endoscopy: "endoscopy",
  // "weightloss" deliberately has no dedicated page yet — bariatric surgery
  // is intentionally de-prioritised in this project's content strategy.
};

export default function Conditions() {
  const { t } = useLang();
  const c = t.conditions;
  const [open, setOpen] = useState(null);

  return (
    <section
      data-testid="conditions-section"
      className="bg-cream-100 py-24 lg:py-32"
    >
      {/* id + scroll-mt live here (not on the outer <section>) so clicking the
          nav link lands right at the heading, not at the top of this section's
          own py-24/py-32 padding — otherwise the fixed nav's scroll-margin
          offset is satisfied by blank padding and the heading still appears
          visibly "pushed down" below the nav instead of right under it. */}
      <div id="conditions" className="scroll-mt-24 mx-auto max-w-7xl px-5 lg:px-10">
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
            const pageSlug = DEDICATED_PAGES[it.id];
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

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setOpen(isOpen ? null : it.id)}
                      data-testid={`condition-toggle-${it.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors hover:text-gold"
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      {isOpen ? c.close : c.learnMore}
                    </button>

                    {/* Rendered unconditionally (not gated behind `isOpen`) on
                        purpose: when this was only inside the AnimatePresence
                        block above, it never existed in the server-rendered
                        HTML at all (isOpen starts false), so crawlers never
                        saw a link to these dedicated pages anywhere on the
                        homepage — Semrush flagged all of them as orphaned,
                        reachable only via sitemap.xml. */}
                    {pageSlug && (
                      <Link
                        href={`/conditions/${pageSlug}`}
                        data-testid={`condition-full-guide-${it.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 transition-colors hover:text-gold"
                      >
                        Full guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
