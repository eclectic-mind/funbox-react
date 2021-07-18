const path = require("path");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "./bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, "public"),
    compress: true,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};