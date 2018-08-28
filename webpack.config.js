var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js'
    },
 
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/svg+xml'
                }
              },
        ]
    }
    
};