// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],

  image: {
    domains: ["8ek6ccfrg2.ufs.sh"]
  },

  adapter: vercel({
    imageService: true,
  }),
  
});
