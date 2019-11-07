const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = merge(baseConfig,{
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer:{
    port:'8088',
    host:'localhost',
    overlay:{
      errors:true
    },
    historyApiFallback:{
      index: '/index.html'
    }
  }
})
