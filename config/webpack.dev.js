const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/app.js',
    mode: 'development',
    output: {
        filename: 'verrdi.[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html',
            filename: 'index.html'
        })
    ]
};
