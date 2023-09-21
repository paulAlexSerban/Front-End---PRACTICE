// import required dependencies
const webpack = require('webpack');
const dotenv = require('dotenv');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// loaders
const babelLoader = require('./loaders/babel');
const sassLoader = require('./loaders/sass');
const textLoader = require('./loaders/text');
const imageLoader = require('./loaders/image');

const { NODE_ENV, DIST_DIR } = require('../config');

// utils
const { entries } = require('./utils');
console.dir({ entries: entries() });

if (NODE_ENV === 'development') {
    dotenv.config('../.env');
}

console.dir({
    NODE_ENV: NODE_ENV,
    PUBLIC_PATH: process.env.PUBLIC_PATH,
});

// export webpack configuration
module.exports = {
    entry: entries(),
    cache: true,
    output: {
        filename: NODE_ENV === 'development' ? 'scripts/[name].js' : 'scripts/[name].[contenthash].js',
        path: DIST_DIR,
        publicPath: process.env.PUBLIC_PATH || '/',
        clean: true,
    },
    module: {
        rules: [babelLoader, sassLoader, textLoader, imageLoader],
    },
    // configure plugins
    plugins: [
        // use eslint to lint JavaScript code
        new ESLintPlugin(),
        // extract CSS styles into separate files
        new MiniCssExtractPlugin({
            filename: NODE_ENV === 'development' ? 'styles/[name].css' : 'styles/[name].[contenthash].css',
        }),
        // clean the output directory before building
        new CleanWebpackPlugin(),
        // show progress during build process
        new webpack.ProgressPlugin(),
        new WebpackManifestPlugin(),
    ],
};
