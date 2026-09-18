"use client";

// Same reasoning as BlogHeader.js: renders the real homepage Footer component
// instead of a hand-maintained lookalike, so blog pages and the homepage are
// guaranteed to look identical, forever, with no separate file to keep in sync.

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/landing/Footer";

export default function BlogFooter() {
  return (
    <LanguageProvider>
      <Footer />
    </LanguageProvider>
  );
}
