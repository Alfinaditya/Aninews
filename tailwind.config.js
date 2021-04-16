module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#E46295',
        transparant: '#D0D0D0',
        secondary: '#FFD4E5',
        primary: '#5986FB'
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      maxWidth: {
        mdl: '900px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
