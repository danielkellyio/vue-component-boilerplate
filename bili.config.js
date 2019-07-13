module.exports = {
  presets: ['bili/babel'],
  output: {
    moduleName: 'optiImage',
    /**
     * false means styles are added via a style tag appended to the head (client side only)
     * true means separate stylesheet is created
     */
    extractCSS: false,
  },
  plugins: {
    vue: {
      compileTemplate: true,
    },
    babel: { runtimeHelpers: true }
  }
};
