const fonts = require('./assets/fonts')

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#212832',
      accentPrimary: '#455a64',
      white: '#ffffff',
      textColor: '#8caab9',
      textSecondary: '#ffffff',
      dark: '#000000',
      accent: '#fed36a',
      error: '#b04646',
    },
    fontFamily: {
      inter: fonts.inter,
      isemi: fonts.isemi,
      imedium: fonts.imedium,
      psemi: fonts.psemi,
    },
    extend: {},
  },
  plugins: [],
}
