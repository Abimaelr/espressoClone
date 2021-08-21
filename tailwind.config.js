
module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/media/home-back.png')",
        'home': "url('/media/home1.svg')",
       })
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white:'#FFF',
      yellow: '#dff755',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    height: {
      screen: '100vh',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      hero: '80%',
      icon: '64px',
      btn: '60px',
     },
     width: {
      screen: '100vh',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      
      card: '320px',
      heroText: '350px',
      hero: '80%',
      minContent: 'min-content',
      maxContent: 'max-content',
      auto: "auto",
      btn: '200px',
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
