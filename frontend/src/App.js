import React, { useState } from "react";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import SymptomBot from "@/components/landing/SymptomBot";
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

function App() {
  const [botOpen, setBotOpen] = useState(false);
  const openBot = () => setBotOpen(true);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-100 font-body text-forest-900 antialiased">
        <Nav onCheckSymptoms={openBot} />
        <main>
          <Hero onCheckSymptoms={openBot} />
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
        <SymptomBot open={botOpen} setOpen={setBotOpen} />
      </div>
    </LanguageProvider>
  );
}

export default App;
