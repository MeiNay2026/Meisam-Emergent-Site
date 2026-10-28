"use client";

// Floating "click to chat" WhatsApp button, fixed to the bottom corner on
// every page. Used to sit at bottom-[104px], stacked above the (now removed)
// symptom-checker's own floating toggle — with that gone, this is the only
// floating element left, so it sits at the normal bottom-6 corner position.

import React from "react";
import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-forest-900/20 ring-4 ring-[#25D366]/25 transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
