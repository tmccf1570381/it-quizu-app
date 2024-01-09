import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
      alias: {
          './runtimeConfig': './runtimeConfig.browser',
      },
  },
})
