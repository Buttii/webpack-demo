const path = require("path")


module.exports = {
  entry: "",
  output: {},
  plugins: [

  ],
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'}
    ]
  }
}