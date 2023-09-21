// import required dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('../config');

// export webpack configuration
module.exports = (env) =>
    merge(common, {
        mode: config.NODE_ENV,
        devtool: 'source-map',
        devServer: {
            port: 9000,
            compress: true,
            static: {
                directory: config.DIST_DIR,
            },
            devMiddleware: {
                index: 'index.html',
                writeToDisk: true,
            },
            client: {
                overlay: true,
            },
        },
    });
