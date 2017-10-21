const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const browserSyncWebpackPlugin = require('browser-sync-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const react = require('babel-preset-react')
const env = require('babel-preset-env')
const path = require('path')

module.exports = {
  entry : './website/index.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'paquetechidoliro.js'
  },

  module : {
    rules : [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },

      {
        test: /\.styl/,
        use : extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use : ['css-loader', 'stylus-loader']
        })
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },

      {
        test: /\.js$/,
        use : [
          {
            loader : 'babel-loader',
            options : {
              presets : ['env', 'react']
            }
          }
        ]
      },

    ]
  },

  plugins : [
    new browserSyncWebpackPlugin({
      host: 'localhost',
      port: 3000,
      server : { 
        baseDir : ['dist'] 
      },
      open: false
    }),

    new htmlWebpackPlugin({
      template : './website/app.html'
    }),

    new extractTextWebpackPlugin('styles.css'),

    new cleanWebpackPlugin('dist')
  ]
}