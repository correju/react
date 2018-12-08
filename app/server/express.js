import express from 'express';
import path from 'path';
import 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import configDevClient  from '../../config/webpack.dev-client';
import configProdClient  from '../../config/webpack.prod-client';
import configDevServer  from '../../config/webpack.dev-server';
import configProdServer  from '../../config/webpack.prod-server';


const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8080;
const server = express();
let isBuilt = false
const done = () => {
    !isBuilt &&
      server.listen(port, () => {
        isBuilt = true
        console.log(
          `Server listening on http://localhost:${port} in ${
            process.env.NODE_ENV
          }`
        )
      })
};
if (!isProd) {
    // const webpack = require('webpack');
    const compiler = webpack([configDevClient, configDevServer]);
    const clientCompiler = compiler.compilers[0];
    const serverCompiler = compiler.compilers[1];
    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);
    const webpackHotMiddleware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);
    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);
    server.use(webpackHotServerMiddleware(compiler));
    compiler.plugin("done", done)
} else {
    webpack([configProdClient, configProdServer]).run((err, stats) => {
        const clientStats = stats.toJson().children[0];
        const render = require('../../build/verrdi.server').default;
        const expressStaticGzip = require('express-static-gzip');
        server.use(expressStaticGzip('dist', {
            enableBrotli: true
        }));
        server.use(render({ clientStats }));
        done();
    })
}
