module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  presets: [
    require('./lib/tailwindcss-preset-screens'),
    require('./lib/tailwindcss-preset-typograhy'),
    require('./lib/tailwindcss-preset-colors'),
  ],
  plugins: [
    /**
     * NOTE:
     * ======
     * From version 3 tailwind supports this natively
     * but the browser support for it is not above 90% (https://caniuse.com/?search=aspect-ratio)
     * So rather use the 'padding-hack' for compatibility
     */
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('./lib/tailwindcss-plugin-bg-grainy'),
  ],
}
