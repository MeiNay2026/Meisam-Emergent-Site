import App from "@/App";
import { translations } from "@/i18n/content";

// This is a Server Component — Next.js renders it (and the client component
// tree inside App) to real HTML at build time, which is the whole point of
// the migration off Create React App: search engines and AI crawlers that
// don't run JavaScript now see the actual page content immediately instead
// of an empty <div id="root">.

// FAQPage JSON-LD for the homepage's own FAQ section (FAQ.js). The condition
// and blog pages already emit this for their own FAQs; the homepage's 6
// real Q&As (content.js -> en.faq.items) were visible to visitors but never
// marked up, so AI answer engines and Google's FAQ rich results had nothing
// structured to lift from the homepage itself. Sourced from the English
// strings specifically, since that's what's actually in the server-rendered
// HTML on first load (see LanguageContext.js: lang defaults to "en" during
// SSR, the saved preference only takes over client-side after mount) —
// marking up text that isn't what crawlers actually see would be worse than
// not marking it up at all.
function homeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: translations.en.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd()) }}
      />
      <App />
    </>
  );
}
