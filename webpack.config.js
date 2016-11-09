const webpack = require('webpack');
const fs = require('fs');

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        hot: true
    }
};