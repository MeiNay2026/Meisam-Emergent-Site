import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";
import { scrollToId } from "./cta";

export default function Articles() {
  const { t, isRTL } = useLang();
  const ar = t.articles;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="resources"
      data-testid="articles-section"
      className="scroll-mt-24 bg-cream-100 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline>{ar.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
              {ar.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-700/80">{ar.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ar.items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <article
                data-testid={`article-card-${i}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-32 items-end bg-forest-900 p-6">
                  <div className="grain absolute inset-0 opacity-30" />
                  <span className="relative font-heading text-6xl font-light text-cream-100/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute end-5 top-5 rounded-full bg-cream-100/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100 ring-1 ring-cream-100/20">
                    {it.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-medium leading-snug text-forest-900">
                    {it.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                    {it.excerpt}
                  </p>
                  <button
                    onClick={() => scrollToId("contact")}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors group-hover:text-gold"
                  >
                    {ar.readMore}
                    <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
