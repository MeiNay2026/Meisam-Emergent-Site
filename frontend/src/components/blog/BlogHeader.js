"use client";

// Lightweight header for standalone /blog pages. The homepage's Nav.js can't be
// reused as-is here: it depends on the LanguageProvider context and on
// scrollToId(), which only works for anchor sections that exist on the
// homepage itself. Blog pages link back to those homepage sections with plain
// "/#id" hrefs instead, which works from any page.

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { telHref, SITE } from "@/lib/site";

export default function BlogHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/#conditions", label: "Conditions" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      data-testid="blog-nav"
      className="sticky top-0 z-50 border-b border-forest-100 bg-cream-100/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="text-start leading-tight">
          <span className="block font-heading text-xl font-semibold tracking-tight text-forest-900 sm:text-2xl">
            Dr. Meisam Lund
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-forest-500">
            Consultant General Surgeon
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forest-800/90 transition-colors hover:text-forest-900"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream-100 transition-colors hover:bg-lime hover:text-forest-900"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-900/15 bg-white/50 text-forest-900 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-forest-100 bg-cream-100/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-100"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={telHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream-100"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
