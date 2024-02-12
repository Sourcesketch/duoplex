/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        title: 'DELIRIUM NCV', // Adds a new `font-display` class
        body: 'Neue Montreal', // Adds a new `font-display` class
      },
      colors:{
        green: '#21F48F',
        blue400: '#26B1ED',
        blue500: '#2580EF',
        blue600: '#225EF2',
        blue700: '#083644',
        yellow: '#F2BB22',
        orange: '#FC7E4C',
        purple: '#7C22F2',
        red: '#F24949',
        darkgray:'#OEOEOE',
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

