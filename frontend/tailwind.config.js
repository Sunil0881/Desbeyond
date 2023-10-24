/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "poppins"],
        roboto: ["Roboto", "serif"],
        montserrat: ["Montserrat", "sans"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans - serif"],
        rem: ["REM", "sans - serif"],
        roboto: ["Roboto", "sans - serif"],
        ubuntu: ["Ubuntu", "sans - serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
