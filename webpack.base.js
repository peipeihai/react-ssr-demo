module.exports = {
    // 告诉 webpack 在它贯穿的每个文件上运行 babel
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react',
                    'stage-3',
                    ['env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }],
                ]
            }
        }],
    },
};