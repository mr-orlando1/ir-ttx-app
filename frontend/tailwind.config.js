/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        glacier: "#2296DD",
        blaze: "#FF3833",
        soleil: "#FFBC00",
        surf: "#2B3C48"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}