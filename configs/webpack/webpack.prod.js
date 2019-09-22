const { resolve } = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ManifestPlugin = require('webpack-manifest-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        bundle: './index.tsx',
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        path: resolve(__dirname, '../../build'),
        publicPath: '/',
    },
    plugins: [
        new ManifestPlugin({
            basePath: '/bundle',
            fileName: 'asset-manifest.json',
        }),
        new SWPrecacheWebpackPlugin({
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            logger(message) {
                if (message.indexOf('Total precache size is') === 0) {
                    return
                }
                console.log(message)
            },
            minify: true,
            navigateFallback: '/index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
            }),
        ],
    },
})
