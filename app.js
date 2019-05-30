const express = require('express');

const app = express();

//how arrow functions reduce code
app.get('/', (req, res) => {
    res.send(`hey "dere world!`);
});

app.get('/about', (req, res) => {
    res.send(`I like long walks off the edge of a clift.`);
});

app.listen(4000, () => console.log('Listening on 4000'));