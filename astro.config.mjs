import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/js/remark-reading-time.mjs';
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx({
    drafts: true
  }), image(), tailwind(), react()],
  remarkPlugins: [remarkReadingTime],
  adapter: netlify()
});