const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        main: "0px 16px 20px -4px rgb(64 66 70 / 12%)",
        header: "0px 8px 20px -4px rgb(64 66 70 / 12%);",
        inset: "inset 0 0 0 5px hsl(0deg 0% 18% / 18%);",
      },
    },
  },
  plugins: [],
};
