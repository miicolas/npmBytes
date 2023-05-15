import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/js/remark-reading-time.mjs';
import image from "@astrojs/image";



// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx({
    drafts: true
  }), image()],
  remarkPlugins: [remarkReadingTime],
});