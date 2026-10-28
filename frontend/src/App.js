"use client";

import React from "react";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";
import Conditions from "@/components/landing/Conditions";
import WhyChoose from "@/components/landing/WhyChoose";
import About from "@/components/landing/About";
import PatientJourney from "@/components/landing/PatientJourney";
import Testimonials from "@/components/landing/Testimonials";
import Articles from "@/components/landing/Articles";
import FAQ from "@/components/landing/FAQ";
import Insurance from "@/components/landing/Insurance";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

// react-query's QueryClientProvider used to wrap everything here, but the
// only thing in this app that ever fetched data through it was the
// symptom-checker bot (a plain axios.post, not even a useQuery/useMutation
// hook) — grepping the codebase now turns up zero remaining uses of
// useQuery/useMutation/QueryClient anywhere, so the provider was pure
// dead weight once that feature was removed.
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <Conditions />
          <WhyChoose />
          <About />
          <PatientJourney />
          <Testimonials />
          <Articles />
          <FAQ />
          <Insurance />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

export default App;
