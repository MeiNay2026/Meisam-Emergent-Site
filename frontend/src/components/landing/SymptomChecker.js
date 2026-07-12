import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2, Sparkles, AlertTriangle, CheckCircle2, CalendarClock,
  Stethoscope, Send, Info,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";
import { BookButton } from "./cta";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function SymptomChecker() {
  const { t, lang } = useLang();
  const s = t.symptom;

  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const ask = async () => {
    if (!selected || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const { data } = await axios.post(`${API}/symptom-check`, {
        symptom: selected.label,
        details,
        language: lang,
      });
      setResult(data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="symptoms"
      data-testid="symptom-checker"
      className="relative scroll-mt-24 bg-cream-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left intro */}
          <div className="lg:col-span-4">
            <Reveal>
              <Overline>{s.overline}</Overline>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
                {s.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-forest-700/80">
                {s.subtitle}
              </p>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-forest-100 bg-white/70 p-4 text-xs leading-relaxed text-forest-700/70">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{s.disclaimer}</span>
              </div>
            </Reveal>
          </div>

          {/* Right interactive */}
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <div className="rounded-[2rem] border border-forest-100 bg-white p-6 shadow-xl shadow-forest-900/5 sm:p-9">
                {/* chips */}
                <div className="flex flex-wrap gap-2.5">
                  {s.symptoms.map((sym) => {
                    const active = selected?.id === sym.id;
                    return (
                      <button
                        key={sym.id}
                        data-testid={`symptom-chip-${sym.id}`}
                        onClick={() => setSelected(sym)}
                        className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                          active
                            ? "border-forest-900 bg-forest-900 text-cream-100 shadow-md"
                            : "border-forest-100 bg-cream-100 text-forest-800 hover:border-forest-300 hover:-translate-y-0.5"
                        }`}
                      >
                        {sym.label}
                      </button>
                    );
                  })}
                </div>

                {/* details + ask */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <input
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && ask()}
                    placeholder={s.detailsPlaceholder}
                    data-testid="symptom-details-input"
                    className="w-full flex-1 rounded-full border border-forest-100 bg-cream-100 px-5 py-3.5 text-sm text-forest-900 outline-none transition-colors placeholder:text-forest-500/60 focus:border-forest-300"
                  />
                  <button
                    onClick={ask}
                    disabled={!selected || loading}
                    data-testid="symptom-ask-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-6 py-3.5 text-sm font-semibold text-cream-100 transition-all duration-300 enabled:hover:bg-forest-800 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {s.ask}
                  </button>
                </div>

                {/* result area */}
                <div className="mt-6" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {loading && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 rounded-2xl bg-forest-100/40 px-5 py-6 text-sm text-forest-700"
                        data-testid="symptom-loading"
                      >
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="h-2 w-2 rounded-full bg-forest-500"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                        {s.thinking}
                      </motion.div>
                    )}

                    {error && !loading && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="rounded-2xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm text-destructive"
                        data-testid="symptom-error"
                      >
                        Something went wrong. Please try again in a moment.
                      </motion.div>
                    )}

                    {result && !loading && (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden rounded-2xl border border-forest-100 bg-cream-100"
                        data-testid="symptom-result"
                      >
                        {/* intro from Dr */}
                        <div className="flex gap-4 border-b border-forest-100 bg-forest-900 p-6 text-cream-100">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100/10 ring-1 ring-cream-100/20">
                            <Stethoscope className="h-5 w-5 text-cream-100" />
                          </div>
                          <div>
                            <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream-500/70">
                              <Sparkles className="h-3.5 w-3.5" /> Dr. Meisam Lund
                            </div>
                            <p className="font-heading text-lg font-light leading-snug">
                              {result.intro}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
                          <ResultBlock
                            icon={<Info className="h-4 w-4" />}
                            title={s.labels.causes}
                            tone="neutral"
                          >
                            <ul className="space-y-1.5">
                              {result.possible_causes.map((c, i) => (
                                <li key={i} className="flex gap-2 text-sm text-forest-800">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </ResultBlock>

                          <ResultBlock
                            icon={<CheckCircle2 className="h-4 w-4" />}
                            title={s.labels.surgery}
                            tone="good"
                          >
                            <p className="text-sm leading-relaxed text-forest-800">
                              {result.when_surgery_helps}
                            </p>
                          </ResultBlock>

                          <ResultBlock
                            icon={<AlertTriangle className="h-4 w-4" />}
                            title={s.labels.redflags}
                            tone="warn"
                          >
                            <ul className="space-y-1.5">
                              {result.red_flags.map((c, i) => (
                                <li key={i} className="flex gap-2 text-sm text-forest-800">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-destructive" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </ResultBlock>

                          <ResultBlock
                            icon={<CalendarClock className="h-4 w-4" />}
                            title={s.labels.book}
                            tone="neutral"
                          >
                            <p className="mb-4 text-sm leading-relaxed text-forest-800">
                              {result.when_to_book}
                            </p>
                            <BookButton label={t.nav.book} testid="symptom-result-book-btn" className="!px-5 !py-2.5 text-xs" />
                          </ResultBlock>
                        </div>

                        <p className="border-t border-forest-100 px-6 py-3 text-[11px] italic text-forest-500">
                          {result.disclaimer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const toneRing = {
  neutral: "text-forest-500",
  good: "text-forest-700",
  warn: "text-destructive",
};

const ResultBlock = ({ icon, title, children, tone }) => (
  <div>
    <div className={`mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] ${toneRing[tone]}`}>
      {icon}
      {title}
    </div>
    {children}
  </div>
);
