import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify your build output directory
    assetsDir: 'assets', // Optional: Specify your assets directory
  },
});
