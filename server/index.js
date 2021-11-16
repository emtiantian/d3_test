/**
 * Require Browsersync
 */
const bs = require('browser-sync').create()

/**
 * Run Browsersync with server config
 */
bs.init({
  port: 9003,
  files: ['dist/*', 'public/*'],
  server: {
    index: './public/index.html'
  }
})
