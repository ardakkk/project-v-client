const { resolve } = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom'],
        bundle: './index.tsx'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            chunkFilter: (chunk) => {
                // Exclude uglification for the `vendor` chunk
                if (chunk.name === 'vendor') {
                    return false;
                }
                return true;
            },
            cache: true,
        })],
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