const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['@babel/polyfill', './app/app.js'],
    mode: 'development',
    output: {
        filename: 'verrdi.[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        hot: true,
        overlay: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'},
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name]-[hash:8].[ext]'
                        }
                    },
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
};
