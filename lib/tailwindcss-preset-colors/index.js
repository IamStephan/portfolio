const { neutral } = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: neutral,
        dark: {
          500: '#313131',
          900: '#0C0E0F',
        },
        'persian-red': {
          50: '#fcf3f3',
          100: '#f9e7e6',
          200: '#f6d7d5',
          250: '#f2c7c5',
          300: '#eeb7b4',
          400: '#e58f8b',
          500: '#da635d',
          550: '#d54b44',
          main: '#c7352d',
          700: '#962822',
          800: '#7d211c',
          900: '#6c1d19',
        },
        cinnabar: {
          50: '#fef7f6',
          100: '#fdefed',
          200: '#fbdedb',
          250: '#f8cec9',
          300: '#f7c2bb',
          400: '#f1998e',
          500: '#eb7060',
          main: '#e64b36',
          600: '#e3331c',
          700: '#ac2715',
          800: '#912112',
          900: '#7f1d10',
        },
      },
    },
  },
}
