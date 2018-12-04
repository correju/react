import React from 'react';
import { renderToString } from 'react-dom/server';
import AppRoot from '../components/AppRoot/index';
import Data  from '../../data/bio';
import { StaticRouter } from 'react-router'
import Routes from '../components/Routes';
export default () => (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Testing Documents</title>
            <link href="/main.css" rel="stylesheet"></head>
        </head>
        <body>
            <div id="react-root">${renderToString(
                <StaticRouter location={req.url} context={{}}>
                    <Routes />
                </StaticRouter>
            )}</div>
            <script type="text/javascript" src="/verrdi.vendors~main.js"></script>
            <script type="text/javascript" src="/verrdi.main.js"></script>
        </body>
        </html>
    `);
};

