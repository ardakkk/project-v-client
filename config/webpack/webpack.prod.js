const { resolve } = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        bundle: './index.tsx'
    },
    output: {
        filename: 'js/[name].[hash].min.js',
        path: resolve(__dirname, "../../build"),
        publicPath: '/'
    },
    devtool: 'source-map',
    plugins: []
})