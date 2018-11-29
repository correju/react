import express from 'express';
import path from 'path';
import 'webpack-dev-middleware';


const port = process.env.PORT || 8080;

const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
const server = express();
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static('dist');
server.use(staticMiddleware);

server.listen(port, () => {
    console.log(`server started in ${port}`);
});
