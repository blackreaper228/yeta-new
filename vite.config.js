import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/yeta-new/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        aboutRu: resolve(__dirname, "ru/about.html"),
        cases: resolve(__dirname, "cases.html"),
        sustainability: resolve(__dirname, "sustainability.html"),
        services: resolve(__dirname, "services.html"),
        service01: resolve(__dirname, "multimodal-solutions.html"),
        service02: resolve(__dirname, "air-freight-and-charter-services.html"),
        service03: resolve(
          __dirname,
          "international-and-domestic-trucking.html"
        ),
        service04: resolve(__dirname, "dangerous-goods.html"),
        service05: resolve(
          __dirname,
          "logistics-consulting-and-route-analysis.html"
        ),
        service06: resolve(__dirname, "warehousing-and-storage.html"),
        test: resolve(__dirname, "test-page.html"),
      },
    },
  },
});
