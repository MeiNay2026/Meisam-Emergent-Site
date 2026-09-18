"use client";

// The blog previously had its own hand-built header that looked close to, but
// not exactly like, the homepage's Nav — which is exactly why it felt
// "different and confusing" to a returning visitor. This now renders the
// real homepage Nav component, wrapped in its own LanguageProvider so it has
// everything it needs (useLang) without depending on the rest of the
// homepage. Same component, same file, so the two can never drift apart
// again as either one is edited later.
//
// Nav's section links (Conditions, About, Contact...) call scrollToId(), which
// now falls back to navigating to "/#id" when that section isn't on the
// current page (see cta.js) — that's what makes them work correctly from a
// standalone blog page instead of doing nothing.

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/landing/Nav";

const goHome = () => {
  if (typeof window !== "undefined") window.location.href = "/";
};

export default function BlogHeader() {
  return (
    <LanguageProvider>
      <Nav onCheckSymptoms={goHome} />
    </LanguageProvider>
  );
}
