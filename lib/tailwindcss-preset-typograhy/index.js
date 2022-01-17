const defaults = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Rubik"', ...defaults.fontFamily.sans],
        sans: ['"Open Sans"', ...defaults.fontFamily.sans],
      },
    },
  },
}
