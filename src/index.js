const express = require('express');
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const Home = require('./client/components/Home');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.end('hello');

    const content = renderToStaticMarkup(<Home />);

    const html = `<html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="./bundle.js"></script>
        </body>
    </html>`;
    
    res.send(html);
});

app.listen(3000, () => {
    console.log('app listens at http://localhost:3000');
});