/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:"#F4F3F2"
      },
      fontFamily:{
        quicksand:["Quicksand","sans-serif"],
        comfortaa:["Comfortaa","sans-serif"]
      }
    },
    fontWeight: {
      base: '400',
      semibold: '600',
      bold:'800'
    },
    fontSize: {
      xs: '10px',
      sm: '12px',
      base: '16px',
      md: '22px',
    },
  },
  plugins: [],
}

