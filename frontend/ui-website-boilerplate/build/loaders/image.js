module.exports = {
    test: /\.(png|jpg|svg)$/,
    type: 'asset',
    parser: {
        dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes
        },
    },
    generator: {
        filename: './images/[name][contenthash:12][ext]',
    },
    use: [
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    quality: 40,
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                },
            },
        },
    ],
};
