import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/yeta-new/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        mainRu: resolve(__dirname, "ru/index.html"),
        aboutRu: resolve(__dirname, "ru/about.html"),
        casesRu: resolve(__dirname, "ru/cases.html"),
        sustainabilityRu: resolve(__dirname, "ru/sustainability.html"),
        servicesRu: resolve(__dirname, "ru/services.html"),
        service01Ru: resolve(__dirname, "ru/multimodal-solutions.html"),
        service02Ru: resolve(
          __dirname,
          "ru/air-freight-and-charter-services.html"
        ),
        service03Ru: resolve(
          __dirname,
          "ru/international-and-domestic-trucking.html"
        ),
        service04Ru: resolve(__dirname, "ru/dangerous-goods.html"),
        service05Ru: resolve(
          __dirname,
          "ru/logistics-consulting-and-route-analysis.html"
        ),
        service06Ru: resolve(__dirname, "ru/warehousing-and-storage.html"),
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
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
      },
    },
  },
});
