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
        'main': '0px 16px 20px -4px #eeeeee',
      },
    },
  },
  plugins: [],
};
