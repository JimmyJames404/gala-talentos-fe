import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/gala-talentos-fe/" : "/",
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  build: { outDir: "dist-pages", emptyOutDir: true },
});
