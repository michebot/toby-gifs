const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }, 
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
                {
                    loader: 'url-loader'
                    // options: {
                    //     name: '[path][name]-[hash:8].[ext]'
                    // },
                },
            ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader',
            })
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};
module.exports = config;

