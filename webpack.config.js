var path = require('path'),
    WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8888',
        './js/index.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
        pathinfo: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015',
                exclude: /node_modules|athena\.js/
            },
            {
                test: /athena\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: '8888',
        // inline hot-reload
        inline: true
    },
    resolve: {
        modules: [
            'node_modules'
        ]

    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            skipFirstNotification: true,
            title: 'AthenaJS-Samples'
        })
    ]
};