import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr"; // Importando o plugin
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
