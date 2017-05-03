import express from 'express';
import path from 'path';
import open from 'open';
import webpack from "webpack";
import config from "../webpack.config.dev.js";

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

app.listen(port, function __error__ (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
