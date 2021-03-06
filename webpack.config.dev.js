import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true, //enables debug info when we run our build
    devtool: 'inline-source-map',
    noInfo: false, // show a list of all files that it is bundling
    entry: [
        path.resolve(__dirname, 'src/index') // app entry point
    ],
    target: 'web',
    // where it should create our dev bundle
    // webpack won't actually generate a file
    // it will serve our build from memory
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Generate HTML file that includes reference to bundle JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ],
    // the file types to handle
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
