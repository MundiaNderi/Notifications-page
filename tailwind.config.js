/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: ' hsl(1, 90%, 64%)',
        blue: 'hsl(219, 85%, 26%)',
        white: 'hsl(0, 0%, 100%)',
        veryLightGrayishBlue: 'hsl(210, 60%, 98%)',
        LightGrayishBlue1: 'hsl(211, 68%, 94%)',
        LightGrayishBlue2: 'hsl(205, 33%, 90%)',
        GrayishBlue: 'hsl(219, 14%, 63%)',
        DarkGrayishBlue: 'hsl(219, 12%, 42%)',
        VeryDarkBlue: 'hsl(224, 21%, 14%)',
        VeryDarkGreyBlue: 'hsla(224, 21%, 14%, 1)'
      }
    },
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontFamily: {
        overpass: ['Plus Jakarta Sans', 'sans-serif'],
      }, 
  },
  plugins: [],
}

