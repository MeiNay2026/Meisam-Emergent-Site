import "./globals.css";

// Next.js turns this into the real <title>/<meta> tags at build time — for every
// page that doesn't override it with its own `metadata` export. This is what
// replaces the old public/index.html <head> block.
export const metadata = {
  metadataBase: new URL("https://doctormeisam.com"),
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
    url: "https://doctormeisam.com/",
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
const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Meisam Lund",
  image: "https://doctormeisam.com/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg",
  url: "https://doctormeisam.com/",
  description:
    "Dr. Meisam Lund is a Swedish Board-Certified Consultant General Surgeon with over 13 years of international surgical experience across Sweden, the United States, Poland and the United Arab Emirates. He specializes in advanced laparoscopic and minimally invasive surgery, hernia repair, gallbladder surgery, emergency abdominal surgery, and diagnostic and therapeutic endoscopy.",
  medicalSpecialty: ["General Surgery", "Laparoscopic Surgery", "Gastrointestinal Surgery"],
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
  worksFor: {
    "@type": "Hospital",
    name: "American Hospital Dubai",
    url: "https://www.ahdubai.com/",
    telephone: "+971-4-377-5500",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19th Street, Oud Metha",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
