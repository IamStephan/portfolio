const defaults = require("tailwindcss/defaultTheme");
const { neutral } = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', ...defaults.fontFamily.sans],
        sans: ['"Poppins"', ...defaults.fontFamily.sans],
      },
      screens: {
        xs: "480px",
        // => @media (min-width: 480px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        gray: neutral,
        named: {
          "primary-1": "#0C0E0F",
          "primary-2": "#9A9A9A",
          accent: "#5258D9",
          "border-dark": "#181D1F",
          "border-light": "#262627",
          input: "#2F393D",
          checkbox: "#647E88",
        },
      },
    },
  },
  plugins: [require("./lib/tailwindcss-plugin-bg-grainy")],
};
