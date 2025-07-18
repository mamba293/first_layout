import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg'],
  build: {
    outDir: 'dist', // Vercel будет использовать её
  },
})

