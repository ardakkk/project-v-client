const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(
    commonConfig,
    {
        mode: "development",
        entry: {
            vendor: ['react', 'react-dom'],
            bundle: './index.tsx'
        },
        output: {
            filename: 'js/[name].[hash].js',
            chunkFilename: '[name].[hash].js',
            publicPath: '/'   
        },
        devtool: "cheap-module-eval-source-map",
        resolve: {
            alias: { 'react-dom': '@hot-loader/react-dom'  }
        },
        plugins: [
            new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        ],
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
        devServer: {
            port: 8080,
            hot: true,
            compress: true,
            contentBase: 'dist',
            overlay: true
        }
    }
);