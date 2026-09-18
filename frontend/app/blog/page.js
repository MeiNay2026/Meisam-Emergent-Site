import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import { blogPosts } from "@/lib/blogPosts";

export const metadata = {
  title: "Surgical Health Articles",
  description:
    "Plain-language, medically-grounded articles from Dr. Meisam Lund, Consultant General Surgeon at American Hospital Dubai, on hernias, gallstones, abdominal pain, recovery and surgical decision-making.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Surgical Health Articles | Dr. Meisam Lund",
    description:
      "Plain-language, medically-grounded articles on hernias, gallstones, abdominal pain, recovery and surgical decision-making.",
    url: "https://doctormeisam.com/blog",
  },
};

// CollectionPage + ItemList JSON-LD, so search/AI engines understand this is a
// structured index of articles rather than a generic page.
function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Surgical Health Articles",
    url: "https://doctormeisam.com/blog",
    description:
      "Plain-language articles from Dr. Meisam Lund on hernias, gallstones, abdominal pain, recovery and surgical decision-making.",
    hasPart: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://doctormeisam.com/blog/${p.slug}`,
      datePublished: p.publishedDate,
    })),
  };
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd()) }}
      />
      <BlogHeader />

      <main>
        {/* Nav is now the real fixed homepage header (see BlogHeader.js), so
            this needs enough top padding to clear it instead of sitting
            underneath it. */}
        <section className="mx-auto max-w-5xl px-5 pb-8 pt-28 lg:px-8 lg:pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-500">
            Surgical clarity
          </p>
          <h1 className="mt-4 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
            Expert insights to help you decide
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest-700/80">
            Honest, plain-language articles from Dr. Meisam Lund on the conditions and decisions
            patients ask about most, no jargon, no fear. These are general educational guides,
            not a substitute for an in-person assessment.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                data-testid={`blog-index-card-${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-forest-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute end-4 top-4 rounded-full bg-forest-900/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream-100 backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-xl font-medium leading-snug text-forest-900">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-forest-700/80">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-forest-500">
                    <span>{p.readTime}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-forest-900 transition-colors group-hover:text-gold">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
