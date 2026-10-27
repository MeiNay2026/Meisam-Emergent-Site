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
      data-testid="about-section"
      className="bg-white py-24 lg:py-32"
    >
      {/* id + scroll-mt moved here from the outer <section> — see Conditions.js
          for why: it keeps the nav-link scroll landing at the content instead
          of at this section's own top padding. */}
      <div id="about" className="scroll-mt-24 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Image */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-forest-100 shadow-2xl shadow-forest-900/10">
                {/* Narrow/phone view keeps the original fixed-height crop.
                    At lg+ the column is much narrower than it is tall, so a
                    fixed height no longer reads as "vertical" — switching to
                    an explicit portrait aspect-ratio (and letting height
                    follow from it) keeps the crop genuinely vertical at any
                    column width. */}
                <img
                  src={IMAGES.aboutDoctor}
                  alt="Dr. Meisam Lund"
                  className="h-[420px] w-full object-cover lg:aspect-[3/4] lg:h-auto"
                  loading="lazy"
                />
              </div>
              {/* Centered under the photo regardless of the box's own
                  (content-driven) width: inset-x-0 + mx-auto on an
                  absolutely-positioned, auto-width element centers it
                  between the container's left and right edges — unlike the
                  old `end-6`, which only pinned it to the right and let it
                  drift off-center whenever its content width changed. */}
              <div className="absolute -bottom-6 inset-x-0 mx-auto w-fit grid grid-cols-3 gap-6 rounded-2xl border border-forest-100 bg-cream-100 px-7 py-5 shadow-xl">
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
