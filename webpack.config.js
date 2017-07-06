var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

 module.exports = {
     entry: {'app':['babel-polyfill','react-hot-loader/patch','./js/main']},
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].js'
     },
     module: {
         loaders: [{ test: /(\.css|\.sass|\.scss)$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader!sass-loader",})) },
         { test: /\.js$/, loaders: ['react-hot-loader/webpack','babel-loader'], exclude: /node_modules/ },
         { test: /\.jsx$/, loaders: ['react-hot-loader/webpack','babel-loader'], exclude: /node_modules/ }    
                ]
     },
    plugins: [
        new ExtractTextPlugin('css/main.css'),
        new webpack.NamedModulesPlugin()
    ],
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };