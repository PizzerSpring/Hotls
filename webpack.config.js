
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/, },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                 type: 'asset/resource'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
    },
    devServer: {
        port: 5000,
        open: true
    }
    /* module: {
         rules: [
             { test: /\.svg$/, use: 'svg-inline-loader' },
             { test: /\.css$/, use: ['style-loader', 'css-loader'] },
             { test: /\.(js)$/, use: 'babel-loader' }
         ]
     },
     devServer: {
         static: {
             directory: path.join(__dirname, '/'), 
         },
     },*/
}