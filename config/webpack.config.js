// 入口
// 出口
// loader
// plugin

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    // hash用于配合浏览器缓存策略，这是前端性能优化的一种方案
    filename: '[name].[hash].bundle.js',
    // 指定打包结果的存放目录
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/xxxx/'
  },
  devServer: {
    contentBase: './dist',   // 指定本地服务的静态资源根路径
    hot: true,  // 开启热更新
  },
  plugins: [
    // 用于把打包后的入口.js文件插入到index.html文件中去
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.NamedModulesPlugin(),  // 用于热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,   // 打包图片文件
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/,   // 打包css文件
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.scss$/,   // 打包scss文件
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      {
        test: /\.js$/,   // 打包js文件
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
