import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',       // make sure the output folder is 'dist'
    minify: 'esbuild',    // minifies JS for production
    sourcemap: false,     // disable source maps for production
    cssCodeSplit: true,   // split CSS into smaller files
    rollupOptions: {
      output: {
        manualChunks: undefined, // optional, ensures optimal chunking
      },
    },
  },
})
