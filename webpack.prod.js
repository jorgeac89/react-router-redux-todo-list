const path = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 24400,
      cacheGroups: {
        defaultVendors: {
          reuseExistingChunk: true
        }
      }
    }
  }
});
