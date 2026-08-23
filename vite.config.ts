import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project sites are served from /one4all/ — build with --mode pages
  base: mode === 'pages' ? '/one4all/' : '/',
}))
