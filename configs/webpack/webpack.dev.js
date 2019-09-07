const { resolve }          = require('path');
const webpack              = require('webpack');
const merge                = require('webpack-merge');
const UglifyJsPlugin       = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig         = require('./webpack.common');

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
            new BundleAnalyzerPlugin(),
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
            host: '0.0.0.0',
            disableHostCheck: true,
            port: 3000,
            hot: true,
            compress: true,
            contentBase: './dist',
            overlay: true
        }
    }
);