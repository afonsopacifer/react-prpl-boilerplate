const merge = require('webpack-merge');
const base = require('./base.config');

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    namedChunks: true
  }
});