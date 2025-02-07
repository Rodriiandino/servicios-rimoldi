// @ts-check
import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'never'
})
