import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../client/Routes'

function render(req, store) {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const initialState = store.getState();

    const html = `<html>
        <head>
            <title>React SSR Demo</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>

            <script src="./bundle.js"></script>
        </body>
    </html>`;

    return html;
}

module.exports = render;