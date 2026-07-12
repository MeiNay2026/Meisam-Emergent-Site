import React from "react";
import { Quote, GraduationCap, Briefcase, BadgeCheck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { IMAGES } from "@/lib/site";
import { Reveal, Overline } from "./Reveal";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section
      id="about"
      data-testid="about-section"
      className="scroll-mt-24 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Image */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-forest-100 shadow-2xl shadow-forest-900/10">
                <img
                  src={IMAGES.aboutDoctor}
                  alt="Dr. Meisam Lund"
                  className="h-[420px] w-full object-cover lg:h-[520px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 end-6 grid grid-cols-3 gap-6 rounded-2xl border border-forest-100 bg-cream-100 px-7 py-5 shadow-xl">
                {a.stats.map((st, i) => (
                  <div key={i} className="text-center" data-testid={`about-stat-${i}`}>
                    <div className="font-heading text-2xl font-medium text-forest-900">{st.value}</div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-forest-500">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Story */}
        <div className="lg:col-span-7 lg:ps-8">
          <Reveal delay={0.1}>
            <Overline>{a.overline}</Overline>
            <h2 className="mt-5 font-heading text-4xl font-light leading-tight tracking-tight text-forest-900 sm:text-5xl">
              {a.title}
            </h2>
            <div className="mt-7 space-y-5">
              {a.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-forest-700/85">{p}</p>
              ))}
            </div>

            <div className="mt-9 rounded-3xl border border-forest-100 bg-cream-100 p-8">
              <Quote className="h-7 w-7 text-gold" />
              <p className="mt-4 font-heading text-2xl font-light italic leading-snug text-forest-900">
                {a.philosophy}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-forest-500">
                {a.philosophyTitle}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Credentials */}
      <div className="mx-auto mt-16 max-w-7xl px-5 lg:mt-24 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 rounded-[2rem] border border-forest-100 bg-cream-100 p-8 md:grid-cols-3 lg:p-12">
            {[
              { title: a.credentials.educationTitle, items: a.credentials.education, Icon: GraduationCap },
              { title: a.credentials.experienceTitle, items: a.credentials.experience, Icon: Briefcase },
              { title: a.credentials.associationTitle, items: a.credentials.associations, Icon: BadgeCheck },
            ].map((col, ci) => (
              <div key={ci} data-testid={`credentials-col-${ci}`}>
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/30 text-forest-900">
                    <col.Icon className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-forest-800">{col.title}</h3>
                </div>
                <ul className="space-y-3">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-snug text-forest-700/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
