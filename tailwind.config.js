/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./index.html"
    ],
  theme: {
    extend: {
      colors: {
        'primary': '#4b55c0',
        'secondary': '#149d4f',
        'tertiary': '#fea31b',
        'accent': '#b3b3b1',
      },
    },
    fontFamily: {
    sans: [
      "Chrome-Black, sans-serif"
    ]
    }
     
  },
  plugins: [],
}
