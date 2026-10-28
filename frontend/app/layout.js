import "./globals.css";

// Next.js turns this into the real <title>/<meta> tags at build time — for every
// page that doesn't override it with its own `metadata` export. This is what
// replaces the old public/index.html <head> block.
export const metadata = {
  metadataBase: new URL("https://www.doctormeisam.com"),
  title: {
    default: "Dr. Meisam Lund | Laparoscopic & General Surgeon, American Hospital Dubai",
    template: "%s | Dr. Meisam Lund",
  },
  description:
    "Dr. Meisam Lund is a Swedish Board-Certified Consultant General Surgeon at American Hospital Dubai, specializing in advanced laparoscopic surgery, hernia and gallbladder surgery, and surgical second opinions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Dr. Meisam Lund",
    title: "Dr. Meisam Lund | Laparoscopic & General Surgeon, American Hospital Dubai",
    description:
      "Swedish Board-Certified Consultant General Surgeon specializing in advanced laparoscopic surgery, hernias, gallbladder disease and surgical second opinions at American Hospital Dubai.",
    url: "https://www.doctormeisam.com/",
    images: ["/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg"],
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Meisam Lund | Laparoscopic & General Surgeon, American Hospital Dubai",
    description:
      "Swedish Board-Certified Consultant General Surgeon specializing in advanced laparoscopic surgery, hernias, gallbladder disease and surgical second opinions at American Hospital Dubai.",
    images: ["/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg"],
  },
};

// Structured data (JSON-LD) so search engines and AI answer engines can read who
// Dr. Lund is as facts, not just prose. Source: practice brief provided Sept 2026.
// If any detail here ever changes (address, phone, credentials), update this
// block first — it's the single source search/AI systems trust most.
//
// Two separate entities, not one overloaded "Physician" object: schema.org's
// Physician type is a subtype of MedicalBusiness/Organization, NOT of Person —
// so Person-only properties (worksFor, alumniOf, knowsLanguage) are invalid on
// it, and it's expected to carry its own top-level `address` the way any
// LocalBusiness does. Putting worksFor/alumniOf on a "Physician"-typed node and
// never giving it an address (Semrush flagged exactly these: ORGANIZATION with
// invalid worksFor/alumniOf, LOCAL_BUSINESS missing address) was the bug.
// Splitting into a Person (Dr. Lund himself) and a MedicalBusiness/Physician
// (the practice) linked by @id is the correct shape for both.
const PERSON_ID = "https://www.doctormeisam.com/#person";
const PRACTICE_ID = "https://www.doctormeisam.com/#practice";

const structuredDataJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Dr. Meisam Lund",
      image: "https://www.doctormeisam.com/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg",
      url: "https://www.doctormeisam.com/",
      jobTitle: "Consultant General Surgeon",
      description:
        "Dr. Meisam Lund is a Swedish Board-Certified Consultant General Surgeon with over 13 years of international surgical experience across Sweden, the United States, Poland and the United Arab Emirates. He specializes in advanced laparoscopic and minimally invasive surgery, hernia repair, gallbladder surgery, emergency abdominal surgery, and diagnostic and therapeutic endoscopy.",
      knowsLanguage: ["English", "Swedish"],
      memberOf: [
        { "@type": "Organization", name: "Emirates Medical Association" },
        { "@type": "Organization", name: "Emirates General Surgery Society" },
        { "@type": "Organization", name: "Swedish Association of Traumatology" },
        { "@type": "Organization", name: "Swedish Upper GI Specialist Committee" },
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Wroclaw Medical University" },
        { "@type": "CollegeOrUniversity", name: "Karolinska University Hospital" },
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        name: "Swedish Board Certification in General Surgery",
        recognizedBy: {
          "@type": "Organization",
          name: "Swedish National Board of Health and Welfare",
        },
        dateCreated: "2013",
      },
      worksFor: { "@id": PRACTICE_ID },
    },
    {
      "@type": ["MedicalBusiness", "Physician"],
      "@id": PRACTICE_ID,
      name: "Dr. Meisam Lund, American Hospital Dubai",
      image: "https://www.doctormeisam.com/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg",
      url: "https://www.doctormeisam.com/",
      telephone: "+971-4-377-5500",
      medicalSpecialty: ["General Surgery", "Laparoscopic Surgery", "Gastrointestinal Surgery"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "American Hospital Dubai, Dubai Science Park",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      parentOrganization: {
        "@type": "Hospital",
        name: "American Hospital Dubai, Dubai Science Park",
        url: "https://www.ahdubai.com/branches/american-hospital-dubai-science-park",
        telephone: "+971-4-377-5500",
        // Every LocalBusiness-lineage node (Hospital included) needs its own
        // address — Semrush flags each nested Hospital sub-object
        // independently, not just the top-level MedicalBusiness node above.
        address: {
          "@type": "PostalAddress",
          streetAddress: "American Hospital Dubai, Dubai Science Park",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
