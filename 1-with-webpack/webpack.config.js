var path = require('path')

// This is a little bit of indirection, but I like having the directories
// shown at the top of the file.
var paths = {
  source: path.resolve('src'),
  output: path.resolve('dist')
}

// The object we export is what Webpack will use for its configuration.
module.exports = {

  target: 'web',
  devtool: 'source-map',

  context: paths.source,
  entry: "./index.js",

  output: {
    path:     paths.output,
    filename: "bundle.js"
  },

  loaders: [
  ]
}
