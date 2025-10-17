// src/stores/useThemeStore.ts
import { create } from "zustand";

interface ThemeStore {
 mode: "light" | "dark";
 setTheme: (theme: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
 mode: (localStorage.getItem("theme") as "light" | "dark") || "light",
 setTheme: (theme) =>
  set(() => {
   localStorage.setItem("theme", theme);
   return { mode: theme };
  }),
}));

export default useThemeStore;
