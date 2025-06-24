/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        "priClr": "var(--priClr)",
        "secClr": "var(--secClr)",
        "themeClr": "var(--themeClr)",
        "themeClr2": "var(--themeClr2)",
        "mainClr": "var(--mainClr)"
      }
    },
  },
  plugins: [],
}