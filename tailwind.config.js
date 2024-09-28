/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      projRed: "#FF3131",
      projBlue: "#224395",
      projBurgundy: "#710000",
      projGray: "#C7C8CA",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
    },
    extend: {
      fontFamily: {
        "nats": ["nats"]
      }
    },
  },
  plugins: [],
}

