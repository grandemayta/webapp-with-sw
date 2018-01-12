const Webpack = require('webpack');
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
    filename: 'bundle.app.js'
  },
  devServer: {
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
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
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      filename: 'index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'bundle.vendor.js'
    })
  ],
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src'],
    alias: {
        vue: 'vue/dist/vue.js'
      }    
  }
};