// import required dependencies
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');

const config = require('../config');

const babelLoader = require('./loaders/babel');
const sassLoader = require('./loaders/sass');
const textLoader = require('./loaders/text');
const imageLoader = require('./loaders/image');

if (process.env.NODE_ENV === 'development') {
    dotenv.config('../.env');
}

console.dir({
    NODE_ENV: process.env.NODE_ENV,
    PUBLIC_PATH: process.env.PUBLIC_PATH,
});

// export webpack configuration
module.exports = {
    entry: {
        index: [
            path.join(config.SRC_DIR, 'js', 'pages', 'index.js'),
            path.join(config.SRC_DIR, 'scss', 'pages', 'index.scss'),
        ],
    },
    output: {
        filename: 'scripts/[name].js',
        path: config.DIST_DIR,
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
            filename: 'styles/[name].css',
        }),
        // clean the output directory before building
        new CleanWebpackPlugin(),
        // show progress during build process
        new webpack.ProgressPlugin(),
    ],
};
