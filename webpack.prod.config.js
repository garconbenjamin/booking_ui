const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js',
  },
});
