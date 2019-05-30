const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

  mode: 'development',

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
    
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist/',
    port: '8000',
    historyApiFallback: true,
    hot: true,
    open: true
  },

  watch:true,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        { from: './src/index.html', to: './' },
        { from: './src/serviceWorkers.js', to: './' }
      ])
  ]

}