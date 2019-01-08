const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "public", "index.html"),
  filename: "./index.html",
  favicon: "./src/images/favicon.png"
});
require("svg-inline-loader");
module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "src", "App.jsx")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]"
            }
          },

          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(svg|png|gif|ttf|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "./",
          publicPath: "/"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".png"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), htmlPlugin],
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true
  }
};
