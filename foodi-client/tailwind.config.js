/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC",
        "aquagr":"#0D6667",
        "maroon":"#B34141",
        "lightgr":"#C1F1C6"
      }
    },
  },
  plugins: [require("daisyui")],
}

