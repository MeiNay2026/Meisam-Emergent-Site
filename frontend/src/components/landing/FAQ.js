import React from "react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { useLang } from "@/context/LanguageContext";
import { Reveal, Overline } from "./Reveal";

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;

  return (
    <section
      data-testid="faq-section"
      className="scroll-mt-24 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <Reveal>
            <Overline>{f.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
              {f.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forest-700/80">{f.subtitle}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {f.items.map((it, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-b border-forest-100"
                >
                  <AccordionTrigger className="py-5 font-heading text-xl font-medium text-forest-900 hover:no-underline [&>svg]:text-gold">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-relaxed text-forest-700/80">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
