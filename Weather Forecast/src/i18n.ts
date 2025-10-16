import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/english.json";
import faTranslation from "./locales/persian.json";

export type LanguageType = "fa" | "en";

i18n
 .use(initReactI18next) // initializes i18next with react-i18next
 .init({
  resources: {
   en: { translation: enTranslation },
   fa: { translation: faTranslation },
  }, // feel free to add any other you want!
  lng: localStorage.getItem("lang") as LanguageType, // default language
  interpolation: {
   escapeValue: false, // This ensures raw HTML in translations (if needed)
  },
  fallbackLng: "en", // if language isn't detected, use this by default
  detection: {
   order: ["localStorage", "navigator"],
   caches: ["localStorage"], // saves preferences
  },
 });

export default i18n;
