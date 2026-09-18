import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blogPosts";
import { SITE, telHref } from "@/lib/site";

// Pre-renders every post to static HTML at build time, the same "real HTML,
// not an empty div" benefit the rest of the Next.js migration was done for.
export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: `https://doctormeisam.com/blog/${post.slug}`,
      publishedTime: post.publishedDate,
      authors: ["Dr. Meisam Lund"],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

// BlogPosting + FAQPage JSON-LD: the two schema types that most directly help
// AI answer engines and Google's rich results lift this content accurately,
// with the right author/credential attached (E-E-A-T) rather than as
// anonymous text.
function postJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    url: `https://doctormeisam.com/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      "@type": "Person",
      name: "Dr. Meisam Lund",
      url: "https://doctormeisam.com/",
      jobTitle: "Consultant General Surgeon",
      worksFor: { "@type": "Hospital", name: "American Hospital Dubai" },
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Meisam Lund",
      logo: { "@type": "ImageObject", url: "https://doctormeisam.com/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://doctormeisam.com/blog/${post.slug}` },
  };
}

function faqJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post)) }}
      />

      <BlogHeader />

      <main>
        {/* Nav is now the real fixed homepage header (see BlogHeader.js), so
            this needs enough top padding to clear it instead of sitting
            underneath it. */}
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-8 lg:pt-32">
          <Link href="/blog" className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-500 hover:text-forest-900">
            &larr; All articles
          </Link>

          <span className="mt-5 inline-block rounded-full bg-forest-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
            {post.tag}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-light leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-forest-500">
            <span>By Dr. Meisam Lund, Consultant General Surgeon</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {new Date(post.publishedDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <div className="relative mt-8 h-56 overflow-hidden rounded-3xl sm:h-72">
            <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
          </div>

          {/* GEO "quick answer" box: a short, self-contained answer near the top
              of the page in plain language, exactly what an AI answer engine
              looks to lift when citing a source for a direct question. */}
          <div
            data-testid="quick-answer"
            className="mt-8 rounded-2xl border border-lime/40 bg-lime/10 p-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-700">
              Quick answer
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-forest-900">{post.quickAnswer}</p>
          </div>

          <div className="prose-content mt-10 space-y-10">
            {post.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-heading text-2xl font-medium leading-snug text-forest-900">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-[15px] leading-relaxed text-forest-800/90">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ block, mirrored 1:1 into FAQPage JSON-LD above */}
          <div className="mt-12 border-t border-forest-100 pt-10">
            <h2 className="font-heading text-2xl font-medium text-forest-900">Frequently asked questions</h2>
            <div className="mt-5 space-y-5">
              {post.faqs.map((f, i) => (
                <div key={i} data-testid={`faq-${i}`}>
                  <p className="font-heading text-base font-medium text-forest-900">{f.q}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-forest-800/90">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-forest-900 p-7 text-center sm:p-9">
            <p className="font-heading text-xl font-light text-cream-100 sm:text-2xl">
              Not sure what your symptoms mean?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream-500/80">
              Try the pre-visit symptom checker on the homepage, or call {SITE.hospital} to book a
              consultation with Dr. Meisam.
            </p>
            <a
              href={telHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-lime-dark"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-forest-500">
            This article is general educational information, not a medical diagnosis. It may not
            cover every situation, and Dr. Meisam may ask further questions in person to confirm
            what applies to you. If you have concerning symptoms, seek in-person medical advice.
          </p>

          {related.length > 0 && (
            <div className="mt-14 border-t border-forest-100 pt-10">
              <h2 className="font-heading text-xl font-medium text-forest-900">Related articles</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">{r.tag}</span>
                    <p className="mt-2 font-heading text-base font-medium leading-snug text-forest-900">{r.title}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 group-hover:text-gold">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <BlogFooter />
    </div>
  );
}
