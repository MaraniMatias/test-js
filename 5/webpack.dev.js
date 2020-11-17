const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "sunmedia-es6.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: "8080",
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "./public"),
    compress: true,
    noInfo: true,
  },
  performance: {
    hints: "warning",
  },
  devtool: "eval-source-map",
  // devtool: "source-map",
});
