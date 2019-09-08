const express = require('express');
const app = express();
const port = 8080;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use('/public',express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, () => console.log(`App running in port ${port}!`));