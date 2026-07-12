import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "@/i18n/content";
import { LANGS } from "@/lib/site";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("ml_lang") || "en");

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
