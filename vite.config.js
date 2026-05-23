import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update 'base' to match your GitHub repo name, e.g. '/ai-insights-saas/'
// Leave as '/' if deploying to a custom domain or Vercel/Netlify
export default defineConfig({
  plugins: [react()],
  base: '/ai-insights-saas/',
})
