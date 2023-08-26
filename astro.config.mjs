import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/js/remark-reading-time.mjs';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  output: 'server',
  integrations: [mdx({
    drafts: true
  }), image(), tailwind(), react()],
  remarkPlugins: [remarkReadingTime],
  adapter: vercel()
});