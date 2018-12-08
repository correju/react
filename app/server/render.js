import React from 'react';
import { renderToString } from 'react-dom/server';
import AppRoot from '../components/AppRoot/index';
import Data  from '../../data/bio';
import { StaticRouter } from 'react-router'
import Routes from '../components/Routes';
import { flushChunkNames } from 'react-universal-component/server';
import  flushChunks from 'webpack-flush-chunks';
export default ({ clientStats }) => (req, res) => {
    const app = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <Routes />
        </StaticRouter>
    );
    const { js, styles, cssHash } = flushChunks(clientStats, {
        chunkNames: flushChunkNames()
    });
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Testing Documents</title>
            ${styles}
        </head>
        <body>
            <div id="react-root">${app}</div>
            ${js}
            ${cssHash}
        </body>
        </html>
    `);
};

