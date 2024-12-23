import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), svelte()],
  adapter: node({
    mode: "standalone"
  })
});