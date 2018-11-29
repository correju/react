const path = require('path');

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
        overlay: true,
    },
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
                        loader: 'file-loader',
                        options: {
                            name: '[name].html'
                        }
                    },
                    {
                        loader: 'extract-loader',
                        options: {
                            publicPath: '../'
                        }
                    },
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
    plugins: []
};
