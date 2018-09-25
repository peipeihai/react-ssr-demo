const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home');

const app = express();

app.get('/', (req, res) => {
    // res.end('hello');

    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(3000, () => {
    console.log('app listens at http://localhost:3000');
});