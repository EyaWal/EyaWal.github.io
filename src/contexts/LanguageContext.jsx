import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import fr from "../locales/fr";
import en from "../locales/en";

import * as contentFR from "../data/content.js";
import * as contentEN from "../data/content.en.js";

const LanguageContext = createContext(null);

const translations = { fr, en };
const contents = { fr: contentFR, en: contentEN };

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolio-language");

  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  return browserLanguage.startsWith("fr") ? "fr" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];
  const content = contents[language];

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, content }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}