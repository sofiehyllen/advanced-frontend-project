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

    borderRadius: {
         'xs': '.7vw',
         'sm': '0 3rem 0 3rem',
         'md': '0 4.5rem 0 4.5rem',
         'lg': '0 5.5rem 0 5.5rem',
    },
    extend: {
    },
  },
  plugins: [],
}

