import React from "react";
import { Phone, MessageCircle, MessagesSquare } from "lucide-react";
import { telHref, waHref, SITE } from "@/lib/site";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Primary "Book Consultation" — links to hospital call centre.
export const BookButton = ({ testid = "book-consultation-btn", label, variant = "dark", className = "" }) => {
  const styles =
    variant === "lime"
      ? "bg-lime text-forest-900 hover:bg-lime-dark"
      : "bg-forest-900 text-cream-100 hover:bg-lime hover:text-forest-900";
  return (
    <a
      href={telHref}
      data-testid={testid}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${styles} ${className}`}
    >
      {label}
      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};

export const SymptomButton = ({ onClick, label, testid = "check-symptoms-btn", variant = "light", className = "" }) => {
  const styles =
    variant === "onDark"
      ? "border-white/40 bg-white/10 text-cream-100 hover:bg-white/20"
      : "border-forest-900/25 bg-white/70 text-forest-900 hover:bg-white";
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${styles} ${className}`}
    >
      {label}
      <MessagesSquare className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
};

export const CallButton = ({ label, className = "" }) => (
  <a
    href={telHref}
    data-testid="call-btn"
    className={`inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-cream-100 backdrop-blur transition-all duration-300 hover:bg-white/20 ${className}`}
  >
    <Phone className="h-4 w-4" />
    {label}
    {SITE.phoneDisplay}
  </a>
);

export const WhatsAppButton = ({ label, className = "" }) => (
  <a
    href={waHref}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-btn"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${className}`}
  >
    <MessageCircle className="h-4 w-4" />
    {label}
  </a>
);
