module.exports = {
  darkMode: 'class',
  content: [
    "./templates/**/*.html"
  ],
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif']
    },

    extend: {
      colors: {
        'dark-base': {
          200: '#444144',
          400: '#222122',
          600: '#1a191a',
          800: '#1a181a',
        },
        'dark-primary': '#c6a976',
        'dark-secondary': '#b9b6b0',
        'sun': {
          100: '#f9f8f4', // card
          200: '#f6f3ef', // background
          300: '#f0ece4', // highlight
          400: '#ece7de', // sidebar
          500: '#c89e3d', // primary color, link
          600: '#e0d7c6', // border
          700: '#af9d81', // primary button, subtitle
          800: '#7b6a4f', // heading
          900: '#41311d', // text
        }
      }
    },
  },
  plugins: [],
}
