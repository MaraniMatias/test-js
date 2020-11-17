const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    filename: "sunmedia-es5.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
});
