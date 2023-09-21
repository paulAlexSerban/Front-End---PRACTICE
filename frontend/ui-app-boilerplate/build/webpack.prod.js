const { merge } = require('webpack-merge');
// import required dependencies
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('../config');

// export webpack configuration
module.exports = (env) =>
    merge(common, {
        mode: config.NODE_ENV,
        plugins: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 5,
                    compress: { warnings: false },
                    output: { comments: false },
                },
            }),
        ],
    });
