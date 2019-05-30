const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './src/serviceWorkers.js', to: './' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js'
  }

}