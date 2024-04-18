/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        DMsans: ['DM Sans', 'sans-serif'],
        salsa: ['salsa', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Pacifico: ['Pacifico', 'sans-serif'],
      },
      colors: {
        // "main-color": "#8C52FF",
        "main-color": "#6670e5",
        "light-border-line": "#e8e8e8",
        "light-text-color": "#191919",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px",
        'xsmall': '290px',
      },
      animation: {
        fade: 'fadeIn .1s ease-in-out',
        goingTop: 'goingTop .3s',
        spinLoader: 'spin .4s linear infinite',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        goingTop: {
          '0%':{transform: 'translateY(100vh) scale(.5)'},
          '100%':{transform: 'translateY(0vh) scale(1)'}
        }
      }),
    },
  },
  plugins: [],
}