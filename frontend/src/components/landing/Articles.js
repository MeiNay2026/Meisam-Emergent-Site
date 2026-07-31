import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";
import { scrollToId } from "./cta";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Articles() {
  const { t, isRTL } = useLang();
  const ar = t.articles;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;
    axios
      .get(`${API}/blog/posts`, { params: { limit: 6 } })
      .then(({ data }) => {
        if (active && data?.posts?.length) setPosts(data.posts);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const usingLive = posts.length > 0;

  // Live WordPress posts, or curated fallback cards.
  const items = usingLive
    ? posts.map((p, i) => ({
        tag: p.tag || "Article",
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        url: p.url,
      }))
    : ar.items.map((it) => ({ ...it, url: null }));

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
          {items.map((it, i) => {
            const CardTag = it.url ? "a" : "article";
            const linkProps = it.url
              ? { href: it.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <CardTag
                  {...linkProps}
                  data-testid={`article-card-${i}`}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  onClick={!it.url ? () => scrollToId("contact") : undefined}
                >
                  {it.image ? (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute end-4 top-4 rounded-full bg-forest-900/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100 backdrop-blur">
                        {it.tag}
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex h-32 items-end bg-forest-900 p-6">
                      <span className="relative font-heading text-6xl font-light text-cream-100/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute end-5 top-5 rounded-full bg-cream-100/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100 ring-1 ring-cream-100/20">
                        {it.tag}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-medium leading-snug text-forest-900">
                      {it.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                      {it.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors group-hover:text-gold">
                      {ar.readMore}
                      {it.url ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      )}
                    </span>
                  </div>
                </CardTag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
