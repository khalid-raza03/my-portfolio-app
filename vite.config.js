import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
     theme: {
    extend: {
       fontFamily: {
        bubblegum: ['Bubblegum Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})