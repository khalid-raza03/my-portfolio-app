import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
   base: '/khalid-raja-portfolio/', 
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