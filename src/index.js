const express = require('express');
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('app listens at http://localhost:3000');
});