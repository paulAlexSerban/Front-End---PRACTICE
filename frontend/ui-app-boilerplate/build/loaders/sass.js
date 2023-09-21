const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // use CSS and Sass loaders to compile CSS stylesheets
    test: /\.(sa|sc|c)ss$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',
        'sass-loader',
    ],
};
