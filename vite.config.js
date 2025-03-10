import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['portafolio.cjdevlabs.com']
  }
})