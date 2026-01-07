import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain aslimu nanti untuk SEO Sitemap yang valid
  site: 'https://idgo.dev', 
  integrations: [
    tailwind(), 
    react(), 
    sitemap()
  ],
});