const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('images'));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '../client')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.listen(3000, () => console.log(`

    Server be running on port 3000

`));
