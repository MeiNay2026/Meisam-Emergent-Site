"use client";

// Renders the real homepage Nav component, wrapped in its own LanguageProvider
// so it has everything it needs (useLang) without depending on the rest of
// the homepage. Same component, same file as the homepage uses, so the two
// can never visually drift apart again as either one is edited later.
//
// Nav's section links (Conditions, About, Contact...) call scrollToId(), which
// falls back to navigating to "/#id" when that section isn't on the current
// page (see cta.js) — that's what makes them work correctly from a standalone
// blog page instead of doing nothing.

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/landing/Nav";

export default function BlogHeader() {
  return (
    <LanguageProvider>
      <Nav />
    </LanguageProvider>
  );
}
