module.exports = {
  purge: {
    enabled: true,
    content: ['./templates/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/static/images/london.jpg')"
      }),
    },
    fontFamily: {
      'hero': ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
