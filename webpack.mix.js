// Pull in Laravel Mix
var mix = require('laravel-mix')

// Configure what it does
mix
  // This is required for hot reloading
  .setPublicPath('./dist')
  // Add eslint to .jsx, .js and .vue files
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.(jsx|js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }
      ]
    },
  })
  // This will copy files from static folder
  // directly into dist folder
  .copy('src/static', 'dist')
  // This will process our entry point (app.js)
  // into the dist/js folder
  .react('src/js/app.js', 'dist/js');
