const path = require('path')
// 用户不必手动写html页面，自动注入编译打包好的脚本文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./example/src/index.html"),
  filename: './index.html'
})
// 自动打开浏览器: webpack-dev-server也可以自动打开
// const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "./example/src/app.js"),
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    // 自动扩展文件后缀名，意味着require时不必加这个后缀
    extensions: ['.js', '.jsx']
  },
  // webpack-dev-server通过websocket通信，可直接打开浏览器，支持热更新
  devServer: {
    port: 8001
  }
}