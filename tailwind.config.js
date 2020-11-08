module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
      'WorkSans': ['"Work Sans"', 'sans-serif']
    },

    extend: {
      colors: {
        custom: {
          100: '#124653',
          200: '#FE8D8F',
          300: '#142546',
          400: '#51BFBD',
          500: '#019EBC',
          600: '#009996',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
