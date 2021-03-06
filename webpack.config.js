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
    filename : 'app.js'
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
        test: /\.css|.styl/,
        use : extractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use : ['css-loader', 'stylus-loader']
        })
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      
      {test: /\.(svg|eot|wof|ttf|otf)/, use: [
        {
          loader : 'url-loader',
          options : {
            limit: 100000,
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },

      {
        test: /\.js/,
        use : [
          {
            loader : 'babel-loader',
            options : {
              presets : ['es2015','stage-2','env','react']
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