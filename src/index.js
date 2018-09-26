const express = require('express');
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const initialState = [1,2,3,4,5,6,7,8,9,10];

    const store = createStore(initialState);

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('app listens at http://localhost:3000');
});