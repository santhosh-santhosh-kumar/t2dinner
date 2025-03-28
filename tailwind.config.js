/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        "mainFont":["Roboto", "sans-serif"]
      },
      colors:{
        "themeRed":"#eb0029",
        "themeYellow":"#ff7b19"
      },
    },
  },
  plugins: [],
}

