import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/portfolio_gagan/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "spa-fallback",
      closeBundle() {
        const indexPath = "dist/index.html";
        const notFoundPath = "dist/404.html";
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, notFoundPath);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
