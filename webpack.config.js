
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const PugPlugin = require('pug-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
             template: path.resolve(__dirname, 'index.html'), 
            // filename: 'index.html', 
            }),
            
    ],
    module: {
        rules: [
            { test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.css'],
    },
    devServer: {
        port: 5000,
        open: true
    }
}