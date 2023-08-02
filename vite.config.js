import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/majo-s-store-react/',
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
