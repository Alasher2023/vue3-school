import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-school/',
  build: {
    outDir: 'docs'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./key.pem'),
  //     cert: fs.readFileSync('./cert.pem')
  //   }
  // }
})
