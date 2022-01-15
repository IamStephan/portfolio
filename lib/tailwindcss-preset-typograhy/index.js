const defaults = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Rubik"', ...defaults.fontFamily.sans],
        // heading: ['"Poppins"', ...defaults.fontFamily.sans],
        sans: ['"Open Sans"', ...defaults.fontFamily.sans],
      },
    },
  },
}
