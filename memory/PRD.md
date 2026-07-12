# PRD — Dr. Meisam Lund Landing Page

## Original Problem Statement
Scroll-based, animated, editorial luxury healthcare landing page for Dr. Meisam Lund — Swedish
Board Certified Consultant General Surgeon at American Hospital Dubai. Aesthetic: Apple ×
Scandinavian minimalism × luxury healthcare. Goal: inspire trust, reduce anxiety, guide patients
to Book a Consultation. Sections: Hero, Trust Bar, AI Symptom Checker, Why Choose, Conditions
(expandable), About, Patient Journey, Testimonials, Articles, FAQ, Insurance, Final CTA.

## User Choices
- Book Consultation → links to call centre `tel:+97143775500` & WhatsApp `wa.me/97143775500` (no form).
- Symptom Checker → AI-powered, responds in Dr. Meisam's first-person surgeon voice.
- Realistic placeholder copy (editable later).
- Doctor photos: two provided assets used (hero + about).
- Languages: English, Arabic (RTL), Swedish with switcher.

## Architecture
- Backend: FastAPI (`/app/backend/server.py`). Endpoint `POST /api/symptom-check` uses
  emergentintegrations `LlmChat` (anthropic `claude-sonnet-4-6`, `EMERGENT_LLM_KEY`), returns
  structured JSON (intro, possible_causes, when_surgery_helps, red_flags, when_to_book, disclaimer),
  persists to Mongo `symptom_checks`.
- Frontend: React + Tailwind + framer-motion. Fonts: Cormorant Garamond (headings) + Manrope (body),
  Noto Naskh Arabic for RTL. Colors: forest green + warm cream + gold accent. Native smooth scroll.
- i18n via `LanguageContext` + `i18n/content.js` (en/ar/sv), RTL handled on `document.dir`.

## Implemented (Dec 2025)
- All 12 sections built & responsive, scroll-reveal animations, sticky glass nav, repeated CTAs.
- AI Symptom Checker working in EN/AR/SV. Language switcher with RTL. Expandable conditions,
  FAQ accordion, testimonials carousel, insurance grid.
- Tested: backend 5/5 pytest, frontend e2e 100% (iteration_1.json). No open issues.

## Backlog / Next
- P1: Replace placeholder copy with Dr. Meisam's real bio, testimonials, article bodies.
- P1: Real social links; optional dedicated article detail pages.
- P2: Streaming/typing effect for AI responses; analytics on CTA clicks; SEO/OG meta + schema.org Physician.
- P2: Optional booking form + admin if lead capture is desired later.
