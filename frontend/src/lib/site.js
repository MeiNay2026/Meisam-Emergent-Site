export const SITE = {
  doctorName: "Dr. Meisam Lund",
  phone: "+97143775500",
  phoneDisplay: "+971 4 377 5500",
  whatsapp: "971503147013",
  hospital: "American Hospital Dubai",
  location: "American Hospital Dubai, Oud Metha, Dubai",
};

export const telHref = `tel:${SITE.phone}`;
export const waHref = `https://wa.me/${SITE.whatsapp}`;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/drmeisam",
  instagram: "https://instagram.com/doctormeisam",
};

export const IMAGES = {
  // NOTE: previously hosted on Emergent's own CDN (customer-assets.emergentagent.com),
  // which won't be reliable once this project is deployed independently. Now self-hosted
  // from /public/images/ — place the real files there (see deploy notes).
   heroDoctor: "/u4ja9nos_SR5_0382.webp",
   aboutDoctor: "/qpdb2xg6_MEISAM%20BIO%20PROFILE%20PIC.jpeg",
  heroBg:
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2400&q=80",
  hospitalAmbient:
    "https://images.unsplash.com/photo-1719934398679-d764c1410770",
  scandinavia:
    "https://images.unsplash.com/photo-1757075027551-30c4fd0a7042",
  anatomy:
    "https://images.unsplash.com/photo-1743767587835-7a80fe384236",
};

export const LANGS = [
  { code: "en", label: "EN", name: "English", dir: "ltr" },
  { code: "ar", label: "AR", name: "العربية", dir: "rtl" },
  { code: "sv", label: "SV", name: "Svenska", dir: "ltr" },
];
