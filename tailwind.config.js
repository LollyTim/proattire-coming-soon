/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo-Bold", "sans-serif"],
        exoReg: ["Exo-Reg", "sans-serif"],
      },
    },
  },
  plugins: [],
};
