const {fonts} = require('./assets')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#212832',
      white: '#ffffff',
      text: '#8caab9',
      textSecondary: '#ffffff',
      dark: '#000000',
      accent: '#fed36a',
    },
    fontFamily: {
      inter: fonts.inter,
      isemi: fonts.isemi,
      ibold: fonts.ibold,
      psemi: fonts.psemi,
    },
    extend: {},
  },
  plugins: [],
}
