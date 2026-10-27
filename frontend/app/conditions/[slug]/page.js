import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import { conditionPages, getConditionBySlug, getOtherConditions } from "@/lib/conditionPages";
import { SITE, telHref } from "@/lib/site";

// Pre-renders every condition page to static HTML at build time, same as
// the blog's dynamic route.
export async function generateStaticParams() {
  return conditionPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getConditionBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: `/conditions/${page.slug}` },
    openGraph: {
      type: "article",
      title: page.title,
      description: page.metaDescription,
      url: `https://www.doctormeisam.com/conditions/${page.slug}`,
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.metaDescription,
    },
  };
}

// MedicalWebPage wrapping a MedicalProcedure entity: the schema pairing most
// relevant to a single-procedure page, with the same author/credential
// attachment (E-E-A-T) used on the blog posts, so AI answer engines and
// Google's health-content systems can attribute this confidently to Dr. Lund
// rather than treating it as anonymous text.
function medicalWebPageJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.title,
    description: page.metaDescription,
    url: `https://www.doctormeisam.com/conditions/${page.slug}`,
    medicalAudience: { "@type": "Patient" },
    about: {
      "@type": "MedicalProcedure",
      name: page.procedureName,
      bodyLocation: page.bodyLocation,
    },
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Meisam Lund",
      jobTitle: "Consultant General Surgeon",
      url: "https://www.doctormeisam.com/",
      worksFor: { "@type": "Hospital", name: "American Hospital Dubai" },
    },
    author: {
      "@type": "Person",
      name: "Dr. Meisam Lund",
      jobTitle: "Consultant General Surgeon",
      worksFor: { "@type": "Hospital", name: "American Hospital Dubai" },
    },
    lastReviewed: new Date().toISOString().slice(0, 10),
  };
}

function faqJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default async function ConditionPage({ params }) {
  const { slug } = await params;
  const page = getConditionBySlug(slug);
  if (!page) notFound();

  const others = getOtherConditions(slug, 3);

  return (
    <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd(page)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page)) }}
      />

      <BlogHeader />

      <main>
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-8 lg:pt-32">
          <Link
            href="/#conditions"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-500 hover:text-forest-900"
          >
            &larr; All conditions
          </Link>

          <span className="mt-5 inline-block rounded-full bg-forest-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
            {page.tag}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-light leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">
            {page.h1}
          </h1>

          <p className="mt-5 text-xs text-forest-500">
            Medically reviewed by Dr. Meisam Lund, Consultant General Surgeon, American Hospital Dubai
          </p>

          {/* GEO "quick answer" box — same pattern as the blog: a short,
              self-contained answer near the top that an AI answer engine can
              lift directly when citing a source for a direct question. */}
          <div
            data-testid="quick-answer"
            className="mt-8 rounded-2xl border border-lime/40 bg-lime/10 p-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-700">
              Quick answer
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-forest-900">{page.quickAnswer}</p>
          </div>

          <div className="prose-content mt-10 space-y-10">
            {page.sections.map((s, i) => (
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
              {page.faqs.map((f, i) => (
                <div key={i} data-testid={`faq-${i}`}>
                  <p className="font-heading text-base font-medium text-forest-900">{f.q}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-forest-800/90">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-forest-900 p-7 text-center sm:p-9">
            <p className="font-heading text-xl font-light text-cream-100 sm:text-2xl">
              Think you may need {page.tag.toLowerCase()} surgery?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream-500/80">
              Call {SITE.hospital} to book a consultation with Dr. Meisam, or try the pre-visit
              symptom checker on the homepage first.
            </p>
            <a
              href={telHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-lime-dark"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-forest-500">
            This page is general educational information, not a medical diagnosis. It may not cover
            every situation, and Dr. Meisam may ask further questions in person to confirm what
            applies to you. If you have concerning symptoms, seek in-person medical advice.
          </p>

          {others.length > 0 && (
            <div className="mt-14 border-t border-forest-100 pt-10">
              <h2 className="font-heading text-xl font-medium text-forest-900">Other conditions treated</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {others.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/conditions/${c.slug}`}
                    className="group rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">{c.tag}</span>
                    <p className="mt-2 font-heading text-base font-medium leading-snug text-forest-900">{c.h1}</p>
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
