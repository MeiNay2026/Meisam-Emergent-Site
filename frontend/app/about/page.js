import Link from "next/link";
import { GraduationCap, Briefcase, BadgeCheck, Quote } from "lucide-react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogFooter from "@/components/blog/BlogFooter";
import { translations } from "@/i18n/content";
import { SITE, telHref, bookingUrl } from "@/lib/site";

// Standalone bio page — content is the SAME text as the homepage's #about
// section (translations.en.about), not rewritten. Dr. Lund's bio previously
// existed only as a homepage anchor with no URL of its own, so there was
// nothing for the Physician schema's `url` to point to, nothing to rank for
// "Dr. Meisam Lund" bio/credentials searches specifically, and nothing an
// AI answer engine could cite as a single, stable source for his
// credentials. Reusing the existing, already-approved copy here avoids
// introducing any new medical or biographical claims that haven't already
// been reviewed.
const a = translations.en.about;

export const metadata = {
  title: "About Dr. Meisam Lund",
  description:
    "Dr. Meisam Lund is a Swedish Board-Certified Consultant General Surgeon at American Hospital Dubai. Credentials, training and experience across Sweden, the USA and the UAE.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    title: "About Dr. Meisam Lund | Consultant General Surgeon",
    description:
      "Credentials, training and experience of Dr. Meisam Lund, Swedish Board-Certified Consultant General Surgeon at American Hospital Dubai.",
    url: "https://www.doctormeisam.com/about",
  },
};

// ProfilePage wrapping the SAME Person node already defined in the
// site-wide graph (app/layout.js, "#person") rather than redeclaring a new
// one — this page is additional detail about that one canonical entity,
// not a second, competing description of him.
function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Dr. Meisam Lund",
    url: "https://www.doctormeisam.com/about",
    mainEntity: { "@id": "https://www.doctormeisam.com/#person" },
  };
}

function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.doctormeisam.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.doctormeisam.com/about" },
    ],
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd()) }}
      />

      <BlogHeader />

      <main>
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 lg:px-8 lg:pt-32">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-500 hover:text-forest-900">
            &larr; Home
          </Link>

          <span className="mt-5 inline-block rounded-full bg-forest-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest-700">
            About
          </span>
          <h1 className="mt-4 font-heading text-3xl font-light leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">
            About Dr. Meisam Lund
          </h1>
          <p className="mt-5 text-xs text-forest-500">
            Consultant General Surgeon, American Hospital Dubai
          </p>

          {/* GEO "quick answer" box, same pattern used site-wide */}
          <div
            data-testid="quick-answer"
            className="mt-8 rounded-2xl border border-lime/40 bg-lime/10 p-5"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-forest-700">
              Quick answer
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-forest-900">
              Dr. Meisam Lund is a Swedish Board-Certified Consultant General Surgeon, certified
              since 2013, practising at American Hospital Dubai, Dubai Science Park. He trained at
              Karolinska University Hospital in Stockholm and Penn Presbyterian Medical Center in
              the USA, and specialises in advanced laparoscopic surgery, hernia and gallbladder
              surgery, emergency and trauma surgery, and diagnostic and therapeutic endoscopy.
            </p>
          </div>

          <div className="prose-content mt-10 space-y-5">
            {a.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-forest-800/90">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-9 rounded-3xl border border-forest-100 bg-white p-7 sm:p-8">
            <Quote className="h-6 w-6 text-gold" />
            <p className="mt-4 font-heading text-xl font-light italic leading-snug text-forest-900 sm:text-2xl">
              {a.philosophy}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-500">
              {a.philosophyTitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {a.stats.map((st, i) => (
              <div key={i} className="rounded-2xl border border-forest-100 bg-white p-5 text-center">
                <div className="font-heading text-2xl font-medium text-forest-900">{st.value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-forest-500">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-forest-100 bg-white p-7 sm:p-9 md:grid-cols-3">
            {[
              { title: a.credentials.educationTitle, items: a.credentials.education, Icon: GraduationCap },
              { title: a.credentials.experienceTitle, items: a.credentials.experience, Icon: Briefcase },
              { title: a.credentials.associationTitle, items: a.credentials.associations, Icon: BadgeCheck },
            ].map((col, ci) => (
              <div key={ci}>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/30 text-forest-900">
                    <col.Icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-forest-800">{col.title}</h2>
                </div>
                <ul className="space-y-3">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-snug text-forest-700/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-forest-900 p-7 text-center sm:p-9">
            <p className="font-heading text-xl font-light text-cream-100 sm:text-2xl">
              Want to discuss your own case?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream-500/80">
              Book a consultation with Dr. Meisam at {SITE.hospital}, or call directly.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-forest-900 transition-colors hover:bg-lime-dark"
              >
                Book Consultation
              </a>
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-6 py-3 text-sm font-semibold text-cream-100 transition-colors hover:bg-cream-100/10"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-forest-100 pt-10">
            <h2 className="font-heading text-xl font-medium text-forest-900">Explore further</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Link
                href="/conditions/gallbladder-surgery"
                className="group rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">Gallbladder</span>
                <p className="mt-2 font-heading text-base font-medium leading-snug text-forest-900">
                  Gallbladder Surgery in Dubai
                </p>
              </Link>
              <Link
                href="/conditions/hernia-surgery"
                className="group rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">Hernia</span>
                <p className="mt-2 font-heading text-base font-medium leading-snug text-forest-900">
                  Hernia Surgery in Dubai
                </p>
              </Link>
              <Link
                href="/blog"
                className="group rounded-2xl border border-forest-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-forest-500">Articles</span>
                <p className="mt-2 font-heading text-base font-medium leading-snug text-forest-900">
                  Surgical Health Articles
                </p>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <BlogFooter />
    </div>
  );
}
