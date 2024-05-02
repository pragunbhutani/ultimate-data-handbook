/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "bld-forest-green": "#1B4546",
        "bld-lime-green": "#C2D770",
        "bld-grey": "#787878",
        "bld-eerie-grey": "#272727",
        "bld-azure": "#F2FAFA",
      },
    },
  },
  plugins: [],
};
