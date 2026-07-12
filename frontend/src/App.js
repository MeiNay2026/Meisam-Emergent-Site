import React from "react";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Scene3D from "@/components/landing/Scene3D";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import SymptomChecker from "@/components/landing/SymptomChecker";
import Conditions from "@/components/landing/Conditions";
import WhyChoose from "@/components/landing/WhyChoose";
import PatientJourney from "@/components/landing/PatientJourney";
import Testimonials from "@/components/landing/Testimonials";
import Articles from "@/components/landing/Articles";
import FAQ from "@/components/landing/FAQ";
import Insurance from "@/components/landing/Insurance";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import { scrollToId } from "@/components/landing/cta";

function App() {
  const goSymptoms = () => scrollToId("symptoms");

  return (
    <LanguageProvider>
      <div className="relative min-h-screen font-body text-forest-900 antialiased">
        <Scene3D />
        <div className="relative z-10">
          <Nav onCheckSymptoms={goSymptoms} />
          <main>
            <Hero onCheckSymptoms={goSymptoms} />
            <TrustBar />
            <SymptomChecker />
            <Conditions />
            <WhyChoose />
            <PatientJourney />
            <Testimonials />
            <Articles />
            <FAQ />
            <Insurance />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
