const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./app/main.js'],
    mode: 'development',
    output: {
        filename: 'verrdi.[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    resolve: { extensions: ['.js', '.jsx'] },
    devServer: {
        contentBase: "dist",
        hot: true,
        overlay: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {loader: 'babel-loader'},
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                    },
                    {loader: 'sass-loader'}
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
