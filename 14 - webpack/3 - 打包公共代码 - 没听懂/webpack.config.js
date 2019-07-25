var webpack = require('webpack');
var path = require('path');         // 系统的path方法

module.exports = {
  entry: {
    pageA: './src/pageA'
  },
  output: {
    path: path.resolve(__dirname,'./dist'),   // 输出的路径
    filename:'[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ]
}
