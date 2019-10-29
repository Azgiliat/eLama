const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader?prependData=@import "./src/scss/style.scss";'],
        }
  ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    watchContentBase: true,
  },
});
