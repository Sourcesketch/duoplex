/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        delirium: 'DELIRIUM NCV', // Adds a new `font-display` class
        neue: 'Neue Montreal', // Adds a new `font-display` class
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
        darkCyan: '#083644',
        darkBlue:'#020611',
        white: '#FFFFFF'
      },
      fontSize: {
        menu: '1.75rem',  // 28px
        body : '1.125rem', // 18px
        title: '14.75rem', // 236px
        menu1: '3.25rem' //52px
      },
      padding: {
        '18': '1.125rem',
        '42': '2.625rem'
      },
      lineHeight: {
        'extra-loose' : '0.3'
      },
      letterSpacing: {
        'tracking-medium': '0.01em',
      }
      
    },
  },
  plugins: [],
}

