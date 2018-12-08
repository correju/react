const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtraCssChunks = require('extract-css-chunks-webpack-plugin');
module.exports = {
    name: 'client',
    entry: [
        '@babel/runtime/regenerator',
        'react-hot-loader/patch',
        '@babel/register',
        'webpack-hot-middleware/client?reload=true',
        '@babel/polyfill',
        './app/main.js'
    ],
    mode: 'development',
    output: {
        filename: 'verrdi.[name].js',
        chunkFilename: 'verrdi.[name].js',
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
                    {loader: ExtraCssChunks.loader},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: ExtraCssChunks.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
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
            },
            {
                test: /\.md$/,
                use: [
                    {loader: "markdown-with-front-matter-loader"}
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtraCssChunks({
            hot: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
};
