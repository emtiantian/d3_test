/**
 * Require Browsersync
 */
const bs = require('browser-sync').create()

/**
 * Run Browsersync with server config
 */
bs.init({
  watch: true,
  port: 9003,
  reloadDelay: 500,
  files: [{
    match: ['dist/*'],
    fn: function (event, file) {
      this.reload()
    }
  }],
  server: {
    index: './dist/index.html'
  }
})
