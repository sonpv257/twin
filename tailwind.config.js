/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '48px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        Karla: ['Karla', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },
      colors:{
        'coffee':{
          50:'#E8D6D0',
          200:'#C89F94',
          400:'#A25F4B',
          600:'#744838',
        }
      },
      keyframes:{
        slideDown:{
          '0%': { transform: 'translateY(-100%)'},
          '100%':{ transform: 'translateY(0)'},
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        faceIn : 'fadeIn .5s ease-in-out',
      },
      backgroundImage:{
        'slider-bg': 'url("./images/slider.jpg")',
        'featured1': 'url("./images/features/featured1.jpg")',
        'featured2': 'url("./images/features/featured2.jpg")',
        'magazine-big':'url("./images/magazines/magazine-big.jpg")',
        'magazine-small1':'url("./images/magazines/magazine-small1.jpg")',
        'magazine-small2':'url("./images/magazines/magazine-small2.jpg")', 
        'parallax' :'url("./images/parallax.jpg")' ,
        'lifestyle1':'url("./images/lifestyles/lifestyle1.jpg")' ,   
        'lifestyle2':'url("./images/lifestyles/lifestyle2.jpg")' ,   
        'lifestyle3':'url("./images/lifestyles/lifestyle3.jpg")' ,   

      },
      letterSpacing:{
        letter:'2px',
      }
    },
  },
  plugins: [],
}

