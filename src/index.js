const express = require('express');
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('app listens at http://localhost:3000');
});