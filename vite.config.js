import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Site utilisateur (dépôt « EyaWal.github.io ») : base "/".
// Site de projet (autre nom de dépôt) : définir BASE_PATH="/nom-du-depot/" au build.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/",
});
