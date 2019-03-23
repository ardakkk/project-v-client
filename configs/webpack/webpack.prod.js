const { resolve } = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom'],
        bundle: './index.tsx'
    },
    output: {
        filename: 'js/[name].[hash].min.js',
        chunkFilename: '[name].[hash].js',
        path: resolve(__dirname, "../../build"),
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: []
})