const { resolve }             = require('path');
const merge                   = require('webpack-merge');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const commonConfig            = require('./webpack.common');
const ManifestPlugin          = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

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
    plugins: [
        new ManifestPlugin({
            basePath: '/bundle',
            fileName: 'asset-manifest.json'
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger(message) {
              if (message.indexOf('Total precache size is') === 0) {
                return;
              }
              console.log(message);
            },
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),
    ]
})