/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html:",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0 50px 100px 0 rgb(0 0 0 / 0.65)'
      },
      dropShadow: {
        'normal': '0 10px 10px rgb(0 0 0 / 0.60)',
        '3xl': '0 10px 20px rgb(0 0 0 / 0.60)'
      },
      fontFamily:{
        space: ["Space Mono", "sans-serif"]
      },
      backgroundImage: {

      }
    }
  },
  plugins: [],
}

