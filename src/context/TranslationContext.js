import React, { createContext, useContext, useState } from "react";
import en from "../../locales/en.json";
import pl from "../../locales/pl.json";

const TranslationContext = createContext();

const translations = { en, pl };

const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

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
