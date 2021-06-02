module.exports = {
  purge: {
    enabled: true,
    content: ['./templates/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'hero': ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
