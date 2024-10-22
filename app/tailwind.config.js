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
    },
  },
  plugins: [],
};
