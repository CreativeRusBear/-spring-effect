const paths = require('./paths');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: paths.src + '/js/script.js',
    output: {
        path: paths.dist,
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: ['/node_modules/'],
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                exclude: ['/node_modules/'],
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'Spring Effect',
            template: paths.src + '/index.html',
            inject: 'head',
            scriptLoading: 'defer',
        })
    ],
};
