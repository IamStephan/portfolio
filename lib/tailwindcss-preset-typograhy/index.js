const defaults = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      typography: {
        inner: {
          css: {
            h3: {
              '@apply text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold':
                '',
            },
            h4: {
              '@apply text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold':
                '',
            },
            h5: {
              '@apply text-base md:text-lg xl:text-xl': '',
            },
          },
        },
      },
      fontFamily: {
        heading: ['"Rubik"', ...defaults.fontFamily.sans],
        // heading: ['"Poppins"', ...defaults.fontFamily.sans],
        sans: ['"Open Sans"', ...defaults.fontFamily.sans],
      },
    },
  },
}
