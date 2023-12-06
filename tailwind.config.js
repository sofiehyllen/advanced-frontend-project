/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
    content: [
        './src/pages/**/*.jsx',
        './src/components/**/*.jsx',
        './index.html'
      ],
  theme: {
    fontFamily: {
        'sans': 'owners-wide, sans-serif',
        'display': 'roboto-mono, monospace',
        'body': 'poppins, sans-serif'
    },
    extend: {
      borderRadius: {
         'img-xs': '0 1.5rem 0 1.5rem',
         'img-sm': '0 3rem 0 3rem',
         'img-md': '0 4.5rem 0 4.5rem',
         'img-lg': '0 5.5rem 0 5.5rem',
      },

      fontSize: {
         'xxs': '.6rem',
      }
    },
  },
  plugins: [],
}

