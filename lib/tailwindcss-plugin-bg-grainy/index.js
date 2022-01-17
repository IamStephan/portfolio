const plugin = require('tailwindcss/plugin')
const grainBase64 = require('./grainBase64')

/**
 * @param {*} Tools Tailwind doesn't have typings 😡😡
 */
function grainyBG({ addUtilities, matchUtilities, theme }) {
  matchUtilities(
    {
      'bg-grainy': (value = 0) => {
        let zIndex = value
        return {
          '@keyframes jitter': {
            '0%,100%': { backgroundPosition: '0 0' },
            '20%': { backgroundPosition: '50% 50%' },
            '40%': { backgroundPosition: '25% 25%' },
            '60%': { backgroundPosition: '75% 75%' },
            '80%': { backgroundPosition: '0% 100%' },
          },
          '&::after': {
            '--grainy-anim': 'none',
            '--grainy-position': 'fixed',
            content: '" "',
            animation: 'var(--grainy-anim)',
            position: 'var(--grainy-position)',
            pointerEvents: 'none',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex,
            backgroundImage: `url(${grainBase64})`,
            opacity: '0.04',
          },
        }
      },
    },
    {
      values: theme('zIndex', {}),
      type: 'any',
    }
  )
  addUtilities({
    '.grainy-animate::after': {
      '--grainy-anim': 'jitter 0.5s steps(1) infinite',
    },
    '.grainy-screen::after': {
      '--grainy-position': 'fixed',
    },
    '.grainy-full::after': {
      '--grainy-position': 'absolute',
    },
    '.grainy-full': {
      position: 'relative',
    },
  })
}

module.exports = plugin(grainyBG)
