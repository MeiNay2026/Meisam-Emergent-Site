"use client";

// Same reasoning as BlogHeader.js: renders the real homepage Footer component
// instead of a hand-maintained lookalike, so blog pages and the homepage are
// guaranteed to look identical, forever, with no separate file to keep in sync.
//
// Also mounts the floating WhatsApp button here so every blog page gets it too
// (blog pages have no symptom-checker bot to clash with, so it's always shown).

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function BlogFooter() {
  return (
    <LanguageProvider>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
