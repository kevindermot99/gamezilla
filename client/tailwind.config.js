/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      }
    },
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
        SulphurPoint: ['Sulphur Point', 'sans-serif']
      },
      colors: {
        // "main-color": "#B931FC",
        "main-color": "#1493F6",
        "body-color": "#1E1F22",
        "border-line-color": "#343434",
        "text-color": "#ebebeb",
        "text-color": "#ebebeb",
        "text-color-light": "#808080",
        "container-color": "#26272B",
        "footer-color": "#1B1C1D",
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
        zoom: 'zoom .6s linear 1',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        goingTop: {
          '0%': { transform: 'translateY(100vh) scale(.5)' },
          '100%': { transform: 'translateY(0vh) scale(1)' }
        },
        zoom: {
          '0%': { transform: ' scale(1.1) ' },
          '100%': { transform: ' scale(1)' }
        }
      }),
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}