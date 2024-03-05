
import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ["Work Sans", 'sans-serif'],
        'raleway': ["Raleway", 'sans-serif'],
        'style-script': ["Style Script", 'cursive']
      }
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    daisyui
  ],
}

