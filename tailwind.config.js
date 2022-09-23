const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#8456EC',
        primaryPurpleDark: '#240D57',
        primaryPurpleLight: '#501FC1',
        primaryPink: '#E87BF8',
        secondaryPurple1: '#CCB6FF',
        secondaryPurple2: '#EDE5FF',
        secondaryPurple3: '#F6F2FF',
        errorBG: '#FFD7E0',
        errorFG: '#E61445',
        successBG: '#D3FFE2',
        successFG: '#00805E',
        netrual: {
          200: '#FBFAFF',
          300: '#F2F2F2',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#828282',
          700: '#4F4F4F',
        }
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                  }
              )
          }
       )
    })
  ],
}
