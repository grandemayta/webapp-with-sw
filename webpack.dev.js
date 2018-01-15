const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3002,
    open: true,
    historyApiFallback: true
  }
});