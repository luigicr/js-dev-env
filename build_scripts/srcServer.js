var express = require ('express'),
    path = require ('path'),
    open = require ('open'),
    port = 3000,
    app = express();

app.get('/', function __server__ (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function __error__ (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
