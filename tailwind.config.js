/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'primary': '#FAF3E0',
        'secondery': '#A4A4A4',
        'accent': '#E3AEB1',
        'contrast': '#2A2E45',
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

