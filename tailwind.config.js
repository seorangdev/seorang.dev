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
        },
        'dark-primary': '#c6a976',
        'dark-secondary': '#b9b6b0',
      }
    },
  },
  plugins: [],
}
