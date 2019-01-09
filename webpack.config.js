const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require('fs');
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, "public", "index.html"),
  filename: "./index.html",
  favicon: "./src/images/favicon.png"
});
require("svg-inline-loader");

const createRedirect = () => {
  if (!fs.existsSync(path.join(__dirname, 'dist'))){
    fs.mkdirSync(path.join(__dirname, 'dist'));
  }
  fs.createReadStream(path.join(__dirname, 'public', '_redirects')).pipe(fs.createWriteStream(path.join(__dirname, 'dist', '_redirects')));
}

module.exports = (env, argv) => {
  const isProduct = argv.mode === 'production';
  if (isProduct) {
    createRedirect();
  }

  return {
    entry: ["@babel/polyfill", path.join(__dirname, "src", "App.jsx")],
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[local]"
              }
            },

            {
              loader: "sass-loader"
            }
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
    plugins: [new webpack.HotModuleReplacementPlugin(), htmlPlugin].concat(
      isProduct ? [ ] : [ ]
    ),
    devServer: {
      historyApiFallback: true,
      contentBase: "./dist",
      hot: true
    }
  };
}