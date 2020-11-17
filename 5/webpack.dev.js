const path = require('path');
const merge = require("webpack-merge"); // eslint-disable-line
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: '8080',
    host: '0.0.0.0',
    contentBase: path.join(__dirname, '.'),
    openPage: '/public',
    hot: true,
    compress: true,
    noInfo: true,
  },
  performance: {
    hints: 'warning',
  },
  devtool: 'eval-source-map',
  // devtool: "source-map",
});
