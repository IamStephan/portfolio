const defaults = require('tailwindcss/defaultTheme')
const { neutral } = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: neutral,
        named: {
          'primary-1': '#0C0E0F',
          'primary-2': '#9A9A9A',
          accent: '#5258D9',
          'border-dark': '#181D1F',
          'border-light': '#262627',
          input: '#2F393D',
          checkbox: '#647E88',
        },
        'tawny-port': {
          50: '#fcf7fa',
          100: '#faf0f4',
          200: '#f5e1ea',
          250: '#efd1df',
          300: '#eac2d4',
          400: '#dea0bc',
          500: '#d17aa1',
          550: '#c75c8c',
          600: '#c24c81',
          700: '#9c3563',
          800: '#812c52',
          main: '#702647',
        },
        stiletto: {
          50: '#fdf7f8',
          100: '#f9ebee',
          200: '#f4d7dc',
          250: '#efc7cf',
          300: '#ecbbc4',
          400: '#e298a5',
          500: '#d56c7f',
          550: '#ce5067',
          600: '#c83c56',
          main: '#9a2c40',
          800: '#7f2435',
          900: '#6f1f2e',
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
        'bright-sun': {
          50: '#fef3d2',
          100: '#fdebb4',
          200: '#fbd76a',
          main: '#facc44',
          300: '#f4b806',
          400: '#d19e05',
          500: '#a47c04',
          550: '#9a7504',
          600: '#816203',
          700: '#634b03',
          800: '#554002',
          900: '#463502',
        },
      },
      fontFamily: {
        heading: ['"Rubik"', ...defaults.fontFamily.sans],
        // heading: ['"Poppins"', ...defaults.fontFamily.sans],
        sans: ['"Open Sans"', ...defaults.fontFamily.sans],
      },
      screens: {
        xs: '480px',
        // => @media (min-width: 480px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [
    /**
     * NOTE:
     * ======
     * From version 3 tailwind supports this natively
     * but the support for it is not above 90% (https://caniuse.com/?search=aspect-ratio)
     * So rather use the 'padding-hack' for compatibility
     */
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('./lib/tailwindcss-plugin-bg-grainy'),
  ],
}
