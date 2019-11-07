const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const webpack = require('webpack')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
//压缩，清除
const cleanWebpackPlugin  = require('clean-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig,{
  mode:'production',
  plugins:[
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname,'../dist/index.html'),
      template: 'index.html',
      inject: true
    })
  ]
})
