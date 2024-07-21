module.exports = {
    plugins: [
      require('autoprefixer'), // Añade prefijos automáticamente
      require('cssnano')({ preset: 'default' }) // Minimiza el CSS
    ]
  };