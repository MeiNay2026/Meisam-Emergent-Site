// Static, no client hooks needed. Mirrors the homepage Footer's contact block
// (NAP consistency matters for local SEO) but links back to homepage sections
// with plain "/#id" hrefs instead of scrollToId, since those anchors live on a
// different page from here.

import React from "react";
import Link from "next/link";
import { SITE, telHref, telHrefIntl, waHref } from "@/lib/site";

export default function BlogFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-100 bg-cream-100">
      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-heading text-xl font-semibold tracking-tight text-forest-900">
              {SITE.doctorName}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-forest-500">
              Consultant General Surgeon
            </div>
            <Link
              href="/"
              className="mt-3 inline-block text-sm font-medium text-forest-700 underline underline-offset-2 hover:text-forest-900"
            >
              Back to homepage
            </Link>
          </div>

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest-500">
              Contact
            </div>
            <div className="space-y-1.5 text-sm text-forest-800/90">
              <div>
                <a href={telHref} className="font-medium hover:text-forest-900 hover:underline">
                  {SITE.phoneDisplay}
                </a>{" "}
                <span className="text-forest-500">(UAE)</span>
              </div>
              <div>
                <a href={telHrefIntl} className="hover:text-forest-900 hover:underline">
                  {SITE.phoneIntlDisplay}
                </a>{" "}
                <span className="text-forest-500">(outside UAE)</span>
              </div>
              <div>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="hover:text-forest-900 hover:underline">
                  WhatsApp (urgent questions)
                </a>
              </div>
              <div className="pt-1 text-forest-500">{SITE.location}</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-100 pt-6 text-xs text-forest-500">
          © {year} {SITE.doctorName}. Practising at {SITE.hospital}.
        </div>
      </div>
    </footer>
  );
}
