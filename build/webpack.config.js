//js脚本文件，设置webpack
var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  entry: path.resolve(__dirname,'../src/main.js'),
  output: {
    // path: path.resolve(__dirname, '../dist')
    //打包后放置的目录
    path: path.join(__dirname,'../dist'),
    //设置资源引用的目录
    publicPath: '../dist/',
    //设置文件输出的名称
    // filename: "main.js"
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
