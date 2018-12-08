const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');
module.exports = {
    name: 'server',
    entry: './app/server/render.js',
    mode: 'production',
    output: {
        filename: 'verrdi.server.js',
        path: path.resolve(__dirname, '../build'),
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals,
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
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.sass$/,
                use: [
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
                            name: 'img/[name].[ext]',
                            emitFile: false
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
                  { loader: "markdown-with-front-matter-loader"}
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};
