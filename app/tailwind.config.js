/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grean100: "#4EB9A6",
        red100: "#E8537A",
        blue100: "#4BBFDC",
        yellow100: "#F7B152",
        violet100: "#6D559E",
      },
      fontFamily: {
        sans: ["Montserrat-Bold", "sans-serif"],
        montserratBlack: ["Montserrat-Black", "sans-serif"],
        montserratBlackItalic: ["Montserrat-BlackItalic", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
        montserratBoldItalic: ["Montserrat-BoldItalic", "sans-serif"],
        montserratExtraBold: ["Montserrat-ExtraBold", "sans-serif"],
        montserratExtraBoldItalic: ["Montserrat-ExtraBoldItalic", "sans-serif"],
        montserratExtraLight: ["Montserrat-ExtraLight", "sans-serif"],
        montserratExtraLightItalic: [
          "Montserrat-ExtraLightItalic",
          "sans-serif",
        ],
        montserratItalic: ["Montserrat-Italic", "sans-serif"],
        montserratLight: ["Montserrat-Light", "sans-serif"],
        montserratLightItalic: ["Montserrat-LightItalic", "sans-serif"],
        montserratMedium: ["Montserrat-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
