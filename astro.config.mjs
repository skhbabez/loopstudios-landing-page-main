// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Josefin Sans",
        weights: [300, 400],
        styles: ["normal"],
        cssVariable: "--font-josefin",
      },
      {
        provider: fontProviders.google(),
        name: "Alata",
        weights: [400],
        styles: ["normal"],
        cssVariable: "--font-alata",
      },
    ],
  },
});
