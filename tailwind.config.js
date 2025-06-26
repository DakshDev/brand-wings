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
      },
      fontFamily: {
        "open_sana_1": "open_sana_1",
        "open_sana_2": "open_sana_2",
        "open_sana_3": "open_sana_3",
      }
    },
  },
  plugins: [],
}