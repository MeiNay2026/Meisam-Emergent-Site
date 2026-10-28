import React from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { telHref, waHref, bookingUrl, SITE } from "@/lib/site";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  // The section doesn't exist on this page (e.g. a standalone /blog page
  // reusing this same Nav/Footer) — go to the homepage and land on it there,
  // instead of silently doing nothing.
  if (typeof window !== "undefined") {
    window.location.href = `/#${id}`;
  }
};

// Primary "Book Consultation" — now a genuinely separate option from Call:
// links out to American Hospital Dubai's own doctor-profile page for Dr. Lund,
// where their real "Request an Appointment" booking form lives (see bookingUrl
// in site.js). Opens in a new tab since it leaves doctormeisam.com entirely.
export const BookButton = ({ testid = "book-consultation-btn", label, variant = "dark", className = "" }) => {
  const styles =
    variant === "lime"
      ? "bg-lime text-forest-900 hover:bg-lime-dark"
      : "bg-forest-900 text-cream-100 hover:bg-lime hover:text-forest-900";
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testid}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${styles} ${className}`}
    >
      {label}
      <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
    </a>
  );
};

// variant "onDark" (default) is the original look, built for the dark
// FinalCTA section — unchanged. variant "light" reuses the former
// SymptomButton's light-background styling, for use on the cream Hero
// section and the (white) mobile nav menu, now that this is also the
// second Hero CTA (see Hero.js) and the mobile nav's second button (see
// Nav.js), replacing the removed symptom-checker buttons.
export const CallButton = ({ label, onClick, variant = "onDark", testid = "call-btn", className = "" }) => {
  const styles =
    variant === "light"
      ? "group border-forest-900/25 bg-white/70 px-7 text-forest-900 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
      : "border-cream-100/30 bg-white/10 px-6 text-cream-100 hover:bg-white/20";
  return (
    <a
      href={telHref}
      onClick={onClick}
      data-testid={testid}
      className={`inline-flex items-center justify-center gap-2 rounded-full border py-3.5 text-sm font-semibold backdrop-blur transition-all duration-300 ${styles} ${className}`}
    >
      <Phone className="h-4 w-4" />
      {label}
      {SITE.phoneDisplay}
    </a>
  );
};

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
