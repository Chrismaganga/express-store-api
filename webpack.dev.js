// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, 
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
});
