const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const { VueLoaderPlugin } = require('vue-loader')

let config ={
    entry: "./src/app.js",
    output: {
        path : path.resolve(__dirname,"./public"),
        filename: "./bundle.js"
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
       },
        {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
              })
      },
      {
            test: /\.vue$/,
            use: 'vue-loader'
      }
    ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new DashboardPlugin(),
        new VueLoaderPlugin()
      ]
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
      new UglifyJsPlugin(),
      new OptimizeCSSAssets()
    );
  }