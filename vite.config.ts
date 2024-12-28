import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://ishara-madu.github.io/',
    }),
  ],
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
})
