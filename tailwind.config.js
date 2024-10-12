/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btn:"#001F3F",
        bgColor:"#F5F5F5",
        priceColor:"#c2410c"
      }
    },
  },
  plugins: [],
}