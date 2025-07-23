import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|svg)$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  base: "/first_layout/"
})
