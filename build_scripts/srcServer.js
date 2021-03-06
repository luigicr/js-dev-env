import express from 'express';
import path from 'path';
import open from 'open';
import webpack from "webpack";
import config from "../webpack.config.dev.js";

/* eslint-disable no-console */

const port = 3000;
// express instance
const app = express();
// call webpack and pass it to config
const compiler = webpack(config);

// tells express to use our webpack dev middleware
app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function __server__ (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function __endpoint__ (req, res) {
    res.json([
        {
            "id": "1",
            "firstName": "Liz",
            "lastName": "Hernandez",
            "email": "lizhernandez@silodyne.com"
        },
        {
            "id": "2",
            "firstName": "Mcmahon",
            "lastName": "Olsen",
            "email": "mcmahonolsen@silodyne.com"
        },
        {
            "id": "3",
            "firstName": "Mercer",
            "lastName": "Stephenson",
            "email": "mercerstephenson@silodyne.com"
        },
        {
            "id": "4",
            "firstName": "Stuart",
            "lastName": "Lynn",
            "email": "stuartlynn@silodyne.com"
        },
        {
            "id": "5",
            "firstName": "Bishop",
            "lastName": "Buck",
            "email": "bishopbuck@silodyne.com"
        }
    ]);
});

app.listen(port, function __error__ (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
