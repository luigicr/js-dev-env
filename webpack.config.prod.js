import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true, //enables debug info when we run our build
    devtool: 'source-map',
    noInfo: false, // show a list of all files that it is bundling
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index') // app entry point
    },
    target: 'web',
    // where it should create our dev bundle
    // webpack won't actually generate a file
    // it will serve our build from memory
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Generate an external css file with a hash in the filename
        new ExtractTextPlugin('[name].[contenthash].css'),
        // Hash the files using md5 so their names change when the content change
        new WebpackMd5Hash(),
        // CommonsChunkPlugin creates a separate bundle
        // of vendor libraries
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Generate HTML file that includes reference to bundle JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    // the file types to handle
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
            // {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
