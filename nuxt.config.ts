import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@scbd-coreui/index.scss',
  ],
  vite: {
    resolve: {
      // Stable alias so children can @use the SCSS anywhere
      alias: {
        '@scbd-coreui': fileURLToPath(new URL('./assets/scss', import.meta.url)),
      },
    },
  },  
})
