// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My To-Do App',
        short_name: 'To-Do App',
        description: 'A simple to-do app built with React and Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'react.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'react.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
});
