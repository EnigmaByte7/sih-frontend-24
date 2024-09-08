/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        teal: {
          500: '#00979d',
        },
        purple:{
          999: "#0a0227"
        },
        sky:{
          899:"#00d6fb"
        }
      },
  },
  plugins: [],
}}