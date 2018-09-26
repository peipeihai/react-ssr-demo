import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

function render() {
    const content = renderToString(<Home />);

    const html = `<html>
        <head>
            <title>React SSR Demo</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="./bundle.js"></script>
        </body>
    </html>`;

    return html;
}

module.exports = render;