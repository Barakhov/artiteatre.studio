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
        main: "0px 16px 16px -4px rgb(64 66 70 / 12%)",
        header: "0px 8px 12px -4px rgb(64 66 70 / 12%);",
      },
      colors: {
        "teatro-primary": "#FFD740",
        "teatro-secondary": "#FF6F00",
        "teatro-50": "#FFF8E1",

        "arte-primary": "#FF6E40",
        "arte-secondary": "#BF360C",
        "arte-50": "#FBE9E7",

        "verano-primary": "#B2FF59",
        "verano-secondary": "#33691E",
        "verano-50": "#F1F8E9",

        "contacto-primary": "#64FFDA",
        "contacto-secondary": "#004D40",
        "contacto-50": "#E0F2F1",
      },
    },
  },
  plugins: [],
};
