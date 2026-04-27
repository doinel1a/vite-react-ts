import path from 'node:path';

import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ]
});
