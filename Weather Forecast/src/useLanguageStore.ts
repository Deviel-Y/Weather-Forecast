import { create } from "zustand";
import type { LanguageType } from "./i18n";

export type DirType = "rtl" | "ltr";

// Zustand State managment config file that manages both "direction" and "language" state
interface LanguageStoreType {
 currentLang: LanguageType;
 setCurrentLang: (lang: LanguageType) => void;

 dir: DirType;
 setDir: (dir: DirType) => void;
}

const useLanguageStore = create<LanguageStoreType>((set) => ({
 currentLang: localStorage.getItem("lang") as LanguageType,
 setCurrentLang: (lang) => set(() => ({ currentLang: lang })),

 dir: localStorage.getItem("dir") as DirType,
 setDir: (dir) => set(() => ({ dir })),
}));

export default useLanguageStore;
