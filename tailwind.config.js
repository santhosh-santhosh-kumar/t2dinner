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
      keyframes: {
        scrollLeft: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-50%)'},
        },
        scrollRight: {
          '0%' : {transform : 'translateX(-50%)'},
          '100%': {transform: 'translateX(0%)'},
        },
      },
      animation: {
        'border-focus': 'borderFocus 0.5s ease-in-out forwards',
        'scroll-left': 'scrollLeft 50s linear infinite',
        'scroll-right': 'scrollRight 150s linear infinite',
      },
    },
  },
  plugins: [],
}

