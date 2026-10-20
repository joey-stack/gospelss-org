"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "SV" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (svText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("SV");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gospels_lang") as Language | null;
      if (saved === "SV" || saved === "EN") {
        setLanguageState(saved);
        if (typeof document !== "undefined") {
          document.documentElement.lang = saved === "SV" ? "sv" : "en";
        }
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("gospels_lang", lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang === "SV" ? "sv" : "en";
      }
    } catch {
      // LocalStorage unavailable
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "SV" ? "EN" : "SV");
  };

  const t = (svText: string, enText: string) => {
    return language === "EN" ? enText : svText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "SV" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (svText: string, enText: string) => svText,
    };
  }
  return context;
}
