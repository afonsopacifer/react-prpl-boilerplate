const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: './dist/',
    port: '8000',
    historyApiFallback: true,
    hot: true
  },
  watch:true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});