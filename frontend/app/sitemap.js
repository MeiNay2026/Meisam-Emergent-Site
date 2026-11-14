import { conditionPages } from "@/lib/conditionPages";
import { blogPosts } from "@/lib/blogPosts";

const BASE_URL = "https://www.doctormeisam.com";

// Auto-generated sitemap — replaces the old hand-maintained public/sitemap.xml.
// That file's own header comment flagged the real risk with a static list:
// "add a new <url> entry here every time a new real page is added" relies on
// someone remembering to do it. This file reads directly from the same data
// conditionPages.js and blogPosts.js already use to render the pages
// themselves, so a new condition page or blog post is automatically in the
// sitemap the next time the site builds — nothing to remember, nothing to
// keep in sync by hand. Next.js serves this at /sitemap.xml automatically
// (same URL search engines already have submitted in GSC), so nothing
// downstream needs to change.
//
// Priorities carried over 1:1 from the old static file: gallbladder and
// hernia are the two highest case-volume/priority procedures (see
// conditionPages.js's own header comment), so they keep the higher 0.85.
const HIGH_PRIORITY_SLUGS = new Set(["gallbladder-surgery", "hernia-surgery"]);

// Bing (and, by extension, ChatGPT's search tool, which draws on Bing's
// index) treats a sitemap's lastmod as a freshness signal for deciding
// what to recrawl first — so an entry with no lastmod at all is a missed
// signal, not a neutral one. This is the date these pages were actually
// last substantively edited (breadcrumbs/FAQ schema added, the hernia
// card's "robotic" claim corrected, the About page and this sitemap
// itself created) — update it here whenever a batch of pages changes
// again, rather than leaving it to quietly go stale.
const LAST_SITE_UPDATE = "2026-11-14";

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: LAST_SITE_UPDATE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: LAST_SITE_UPDATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: LAST_SITE_UPDATE, changeFrequency: "monthly", priority: 0.6 },
  ];

  const conditionEntries = conditionPages.map((c) => ({
    url: `${BASE_URL}/conditions/${c.slug}`,
    lastModified: LAST_SITE_UPDATE,
    changeFrequency: "monthly",
    priority: HIGH_PRIORITY_SLUGS.has(c.slug) ? 0.85 : 0.75,
  }));

  const blogEntries = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedDate || p.publishedDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...conditionEntries, ...blogEntries];
}
