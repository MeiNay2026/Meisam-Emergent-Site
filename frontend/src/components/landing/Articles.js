import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";
import { scrollToId } from "./cta";
import { blogPosts } from "@/lib/blogPosts";

const API = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

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

  // Live WordPress posts (if WORDPRESS_BASE_URL is ever configured on the
  // backend), or the real in-site blog posts at /blog/[slug] as the default.
  // These used to fall back to non-clickable teaser cards that led nowhere;
  // now every card is a genuine link to a full article.
  const items = usingLive
    ? posts.map((p, i) => ({
        tag: p.tag || "Article",
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        url: p.url,
        external: true,
      }))
    : ar.items.map((it, i) => ({
        ...it,
        url: blogPosts[i] ? `/blog/${blogPosts[i].slug}` : null,
        external: false,
      }));

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
            const cardClassName =
              "group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

            const cardBody = (
              <>
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
                      {it.external ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      )}
                    </span>
                  </div>
              </>
            );

            return (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                {it.external && it.url ? (
                  <a
                    href={it.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`article-card-${i}`}
                    className={cardClassName}
                  >
                    {cardBody}
                  </a>
                ) : it.url ? (
                  <Link href={it.url} data-testid={`article-card-${i}`} className={cardClassName}>
                    {cardBody}
                  </Link>
                ) : (
                  <article
                    data-testid={`article-card-${i}`}
                    className={cardClassName}
                    onClick={() => scrollToId("contact")}
                  >
                    {cardBody}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
