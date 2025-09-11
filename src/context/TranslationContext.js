import React, { createContext, useContext, useState } from "react";
import en from "../../locales/en.json";
import pl from "../../locales/pl.json";

const TranslationContext = createContext();

const translations = { en, pl };

const TranslationProvider = ({ children }) => {
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const lang = searchParams.get("lang") || "en"; // default en

  // const value = useMemo(() => ({ lang }), [lang]);

  const [language, setLanguage] = useState(lang);

  const t = (key) => {
    const keys = key.split(".");
    let current = translations[language];
    for (let k of keys) {
      if (current[k] === undefined) {
        return key; // Return the key itself if translation is missing
      }
      current = current[k];
    }
    return current || key;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationProvider };

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    );
  }
  return context;
};
