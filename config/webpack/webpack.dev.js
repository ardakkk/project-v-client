const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(
    commonConfig,
    {
        mode: "development",
        entry: {
            app: './index.tsx'
        },
        devtool: "cheap-module-eval-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(), // enable HMR globally
            new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        ],
        devServer: {
            port: 3000,
            hot: true,
            compress: true,
            contentBase: 'dist',
            overlay: true
        }
    }
);