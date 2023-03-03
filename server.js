const express = require('express');
require('./config/mongoose')
const app = express();
const route = require('./config/route');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(route);

let PORT = 1800;
app.listen(PORT, () => console.log(`The Timeline is on ${PORT}`));