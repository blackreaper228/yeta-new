import { defineConfig } from "vite";
import string from "vite-plugin-string";

export default defineConfig({
  base: "/yeta-new/",

  plugins: [
    string({
      include: "**/*.html",
    }),
  ],
});
