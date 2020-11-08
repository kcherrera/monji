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
    extend: {},
  },
  variants: {},
  plugins: [],
}
