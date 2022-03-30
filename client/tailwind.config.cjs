const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Roboto', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors: {
        hyperlink: '#30C2FF',
        primary: {
          light: '#6ED7FF',
          DEFAULT: '#23A6F0',
          dark: '#0077BD'
        },
        'textinput': '#F9F9F9',
        'input-stroke': '#E5E5E5',
        't-secondary': '#888888'
      },
      width: {
        '24-px': '24px',
        '500-px': '500px',
        '650-px': '650px'
      },
      height: {
        '24-px': '24px'
      },
      fontSize: {
        'icon': '24px'
      }
    }
  },
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
}