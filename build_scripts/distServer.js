import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
// express instance
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function __server__ (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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
