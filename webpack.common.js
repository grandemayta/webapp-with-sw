const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');


module.exports = {
  entry: {
    src: `${src}/app.js`,
    vendor: [
      'vue',
      'vue-router',
      'vue-resource'
    ]
  },
  output: {
    path: dist,
    filename: process.env.NODE_ENV === 'PROD' ? 'bundle.app.min.js' : 'bundle.app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      filename: 'index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: process.env.NODE_ENV === 'PROD' ? 'bundle.vendor.min.js' : 'bundle.vendor.js'
    })
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src'],
    alias: {
      vue: process.env.NODE_ENV === 'PROD' ? 'vue/dist/vue.min.js': 'vue/dist/vue.js'
    }
  }
};