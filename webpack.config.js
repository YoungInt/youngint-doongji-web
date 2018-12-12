const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "public", "index.html"),
  filename: "./index.html"
});

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
          // {
          //   loader: "resolve-url-loader",
          //   options: {
          //     root: "",
          //     includeRoot: true
          //   }
          // },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "./",
          publicPath: "/"
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/"
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
