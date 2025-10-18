import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
 plugins: [
  react({
   babel: {
    plugins: ["babel-plugin-react-compiler"],
   },
  }),
  tailwindcss(),
  visualizer({ open: false }),
 ],

 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },

 server: {
  port: 5173,
  open: true,
  host: true,
 },

 build: {
  sourcemap: false,
  minify: "esbuild",
  chunkSizeWarningLimit: 1500,
  rollupOptions: {
   output: {
    manualChunks: {
     react: ["react", "react-dom"],
     mui: ["@mui/material", "@mui/x-charts"],
     i18n: ["react-i18next", "i18next"],
    },
   },
  },
 },
});
