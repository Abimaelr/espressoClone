const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/media/home-back.png')",
       })
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    height: {
      screen: '100vh',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      hero: '80%',
     },
     width: {
      screen: '100vh',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      heroText: '350px',
      hero: '80%',
     },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '80%': '80%',
      '50%': '50%',
      '16': '4rem',
    }
  },
  variants: {},
  plugins: [],
};
