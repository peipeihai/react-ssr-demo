const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },

    // 告诉 webpack 执行时不要打包任何 node_modules 中已有的依赖包
    externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);