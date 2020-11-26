const paths = require('./paths');
const baseConfig = require('./base.config.js');
const {merge} = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Spring Effect',
            template: paths.src + '/index.html',
            inject: 'head',
            scriptLoading: 'defer',
            minify: true
        })
    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime'
        }
    },
    performance: {
        hints: 'error',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
});
