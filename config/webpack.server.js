const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: ['./app/server/main.js'],
    mode: 'production',
    output: {
        filename: 'verrdi.server.[name].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: "/"
    },
    target: 'node',
    externals: nodeExternals(),
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css"
        }),
    ]
};
