import { create } from "zustand";
import type { LanguageType } from "./i18n";

interface LanguageStoreType {
 currentLang: LanguageType;
 setCurrentLang: (lang: LanguageType) => void;
}

const useLanguageStore = create<LanguageStoreType>((set) => ({
 currentLang: localStorage.getItem("lang") as LanguageType,
 setCurrentLang: (lang) => set(() => ({ currentLang: lang })),
}));

export default useLanguageStore;
