/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html:",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0px 0px 40px 0 rgba(0, 0, 0, 1.00)',
        '3xl': '0px 0px 40px 0 rgba(0, 0, 0, 1.00)'
      },
      dropShadow: {
        'normal': '0 10px 20px rgba(0, 0, 0, 0.60)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.60)',
        'green-glow': '0px 0px 8px rgba(11, 122, 63, 1.00)',
        'green-glow-lg': '0px 0px 15px rgba(11, 122, 63, 1.00)',
        'green-lg': '2px 4px 0px rgba(11, 122, 63, 1.00)',
        'green-sm': '1px 2px 0px rgba(11, 122, 63, 1.00)',
        'green-md': '1.5px 3px 0px rgba(11, 122, 63, 1.00)',
      },
      fontFamily: {
        space: ["Space Mono", "Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        
      },
      backgroundImage: {

      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

