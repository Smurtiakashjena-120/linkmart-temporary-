/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },

  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

//import "tw-elements-react/dist/css/tw-elements-react.min.css";