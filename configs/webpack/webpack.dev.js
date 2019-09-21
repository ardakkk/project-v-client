const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: {
        bundle: './index.tsx',
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[hash].js',
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        hot: true,
        compress: true,
        contentBase: './dist',
        overlay: true,
        historyApiFallback: true,
    },
    optimization: {
        usedExports: true,
    },
})
