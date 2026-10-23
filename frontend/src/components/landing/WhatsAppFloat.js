"use client";

// Floating "click to chat" WhatsApp button — stacked directly above the
// symptom-checker toggle (see SymptomBot.js), same fixed-corner pattern.
// Hides itself while the symptom-checker chat panel is open so the two
// floating elements never overlap.

import React from "react";
import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/site";

export default function WhatsAppFloat({ hide = false }) {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-[104px] end-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-forest-900/20 ring-4 ring-[#25D366]/25 transition-all duration-300 hover:scale-105 ${
        hide
          ? "pointer-events-none translate-y-3 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
