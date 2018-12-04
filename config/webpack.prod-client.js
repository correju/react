const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    name: 'client',
    entry: ['./app/main.js'],
    mode: 'production',
    output: {
        filename: 'verrdi.[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    resolve: { extensions: ['.js', '.jsx'] },
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
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
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
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
        })],
        splitChunks: {
            chunks: "all",
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
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new HtmlWebpackPlugin({
        //     template: './app/index.html'
        // }),
        new CopressionPlugin({
            algorithm: 'gzip'
        }),
        new BrotliPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
