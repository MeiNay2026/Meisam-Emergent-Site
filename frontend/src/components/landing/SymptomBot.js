import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessagesSquare, X, Send, Loader2, Stethoscope, Sparkles,
  Info, CheckCircle2, AlertTriangle, CalendarClock,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { telHref } from "@/lib/site";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function SymptomBot({ open, setOpen }) {
  const { t, lang } = useLang();
  const s = t.symptom;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // seed greeting once
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", kind: "text", text: s.botGreeting || s.subtitle }]);
    }
  }, [open, messages.length, s.botGreeting, s.subtitle]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const ask = async (symptomText) => {
    const symptom = (symptomText || "").trim();
    if (!symptom || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", kind: "text", text: symptom }]);
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/symptom-check`, {
        symptom,
        details: "",
        language: lang,
      });
      setMessages((m) => [...m, { role: "bot", kind: "result", data }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "bot", kind: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating action button */}
      <motion.button
        data-testid="symptom-bot-fab"
        onClick={() => setOpen(!open)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 end-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-lime text-forest-900 shadow-xl shadow-forest-900/20 ring-4 ring-lime/25"
        aria-label={s.title}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Stethoscope className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -end-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-dark opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-lime-dark" />
          </span>
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="symptom-bot-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 end-4 z-[60] flex h-[72vh] max-h-[640px] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-[1.75rem] border border-forest-100 bg-cream-100 shadow-2xl shadow-forest-900/25 sm:end-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-forest-900 px-5 py-4 text-cream-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-forest-900">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div className="flex-1 leading-tight">
                <div className="font-heading text-lg font-medium">Dr. Meisam Lund</div>
                <div className="flex items-center gap-1.5 text-[11px] text-cream-100/70">
                  <span className="h-2 w-2 rounded-full bg-lime" /> {s.botTag}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                data-testid="symptom-bot-close"
                className="rounded-full p-1.5 text-cream-100/80 transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end" data-testid="bot-user-msg">
                    <div className="max-w-[80%] rounded-2xl rounded-ee-sm bg-forest-900 px-4 py-2.5 text-sm text-cream-100">
                      {m.text}
                    </div>
                  </div>
                ) : m.kind === "text" ? (
                  <BotBubble key={i}>
                    <p className="text-sm leading-relaxed text-forest-800">{m.text}</p>
                  </BotBubble>
                ) : m.kind === "error" ? (
                  <BotBubble key={i}>
                    <p className="text-sm text-destructive" data-testid="bot-error">
                      Something went wrong. Please try again in a moment.
                    </p>
                  </BotBubble>
                ) : (
                  <BotBubble key={i} wide>
                    <ResultCard data={m.data} s={s} bookLabel={t.nav.book} />
                  </BotBubble>
                )
              )}

              {loading && (
                <BotBubble>
                  <div className="flex items-center gap-2 text-sm text-forest-500" data-testid="bot-loading">
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
                  </div>
                </BotBubble>
              )}

              {/* symptom chips (always available) */}
              {!loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {s.symptoms.map((sym) => (
                    <button
                      key={sym.id}
                      data-testid={`bot-chip-${sym.id}`}
                      onClick={() => ask(sym.label)}
                      className="rounded-full border border-forest-100 bg-white px-3 py-1.5 text-xs font-medium text-forest-800 transition-all hover:border-forest-900 hover:bg-lime hover:text-forest-900"
                    >
                      {sym.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-forest-100 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && ask(input)}
                  placeholder={s.detailsPlaceholder}
                  data-testid="bot-input"
                  className="flex-1 rounded-full border border-forest-100 bg-cream-100 px-4 py-2.5 text-sm text-forest-900 outline-none transition-colors placeholder:text-forest-500/60 focus:border-forest-900"
                />
                <button
                  onClick={() => ask(input)}
                  disabled={loading || !input.trim()}
                  data-testid="bot-send"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900 text-cream-100 transition-colors enabled:hover:bg-lime enabled:hover:text-forest-900 disabled:opacity-40"
                  aria-label="Send"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-2 px-1 text-[10px] leading-snug text-forest-500">{s.disclaimer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const BotBubble = ({ children, wide }) => (
  <div className="flex items-start gap-2.5">
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-900 text-cream-100">
      <Sparkles className="h-4 w-4 text-lime" />
    </div>
    <div className={`rounded-2xl rounded-ss-sm border border-forest-100 bg-white px-4 py-3 ${wide ? "w-full" : "max-w-[85%]"}`}>
      {children}
    </div>
  </div>
);

const Row = ({ icon, title, tone, children }) => {
  const color = tone === "warn" ? "text-destructive" : tone === "good" ? "text-forest-700" : "text-forest-500";
  return (
    <div>
      <div className={`mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] ${color}`}>
        {icon}
        {title}
      </div>
      {children}
    </div>
  );
};

const ResultCard = ({ data, s, bookLabel }) => (
  <div className="space-y-4" data-testid="bot-result">
    <p className="font-heading text-base font-medium leading-snug text-forest-900">{data.intro}</p>

    <Row icon={<Info className="h-3.5 w-3.5" />} title={s.labels.causes} tone="neutral">
      <ul className="space-y-1">
        {data.possible_causes?.map((c, i) => (
          <li key={i} className="flex gap-2 text-[13px] text-forest-800">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {c}
          </li>
        ))}
      </ul>
    </Row>

    <Row icon={<CheckCircle2 className="h-3.5 w-3.5" />} title={s.labels.surgery} tone="good">
      <p className="text-[13px] leading-relaxed text-forest-800">{data.when_surgery_helps}</p>
    </Row>

    <Row icon={<AlertTriangle className="h-3.5 w-3.5" />} title={s.labels.redflags} tone="warn">
      <ul className="space-y-1">
        {data.red_flags?.map((c, i) => (
          <li key={i} className="flex gap-2 text-[13px] text-forest-800">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-destructive" />
            {c}
          </li>
        ))}
      </ul>
    </Row>

    <Row icon={<CalendarClock className="h-3.5 w-3.5" />} title={s.labels.book} tone="neutral">
      <p className="mb-3 text-[13px] leading-relaxed text-forest-800">{data.when_to_book}</p>
      <a
        href={telHref}
        data-testid="bot-book-btn"
        className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-semibold text-forest-900 transition-colors hover:bg-lime-dark"
      >
        {bookLabel}
      </a>
    </Row>
  </div>
);
