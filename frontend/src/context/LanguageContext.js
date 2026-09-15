import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "@/i18n/content";
import { LANGS } from "@/lib/site";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Guard for SSR: Next.js pre-renders this on the server first (no `localStorage`
  // there), then again in the browser. Falling back to "en" on the server avoids
  // a build-time crash; the real saved value takes over once useEffect runs below.
  const [lang, setLang] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("ml_lang") || "en" : "en"
  );

  const dir = LANGS.find((l) => l.code === lang)?.dir || "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.setAttribute("dir", dir);
    localStorage.setItem("ml_lang", lang);
  }, [lang, dir]);

  const changeLang = useCallback((code) => setLang(code), []);

  const value = {
    lang,
    dir,
    isRTL: dir === "rtl",
    setLang: changeLang,
    t: translations[lang] || translations.en,
    langs: LANGS,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
