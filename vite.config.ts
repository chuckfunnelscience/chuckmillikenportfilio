import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      png: {
        quality: 82,
      },
      jpeg: {
        quality: 82,
      },
      jpg: {
        quality: 82,
      },
      webp: {
        quality: 82,
      },
      avif: {
        quality: 56,
      },
      cache: true,
    }),
  ],
})
