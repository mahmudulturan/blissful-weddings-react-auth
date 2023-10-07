/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'primary': '#EDF2F8',
        'secondery': '#D38DCF',
        'accent': '#EEE2D3',
        'contrast': '#0D1621',
        'highlight': '#FFD700',
        'nature': '#A8D5BA'
      },
      fontFamily:{
          'jSans' : ["'Josefin Sans', sans-serif;"]
      }
    },
  },
  plugins: [require("daisyui")],
  }

