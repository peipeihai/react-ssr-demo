const path = require('path');

module.exports = {
    target: 'node',
    
    entry: './server/src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './server/build'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-3',
                        ['env', { targets: { browsers: ['last 2 versions'] }}],
                    ]
                }
            }
        ]
    },

    resolve: {

    },


};