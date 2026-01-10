import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://idgo.dev', 
  integrations: [
    tailwind(), 
    react(), 
    sitemap()
  ],
  // FIX: Meng-inline CSS ke dalam HTML head.
  // Ini menghilangkan network request untuk CSS dan memperbaiki "Render blocking resources".
  build: {
    inlineStylesheets: 'always'
  },
  // Optimasi gambar bawaan Astro
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  // Prefetching untuk navigasi instan (opsional tapi bagus buat performa)
  prefetch: true,
});