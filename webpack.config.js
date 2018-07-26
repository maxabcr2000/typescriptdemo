/* global __dirname, require, module*/

const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

let lib = 'libName';

let plugins = [new CheckerPlugin(), new HardSourceWebpackPlugin()];
// let minimize;

var config = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        path: path.join(__dirname, '/build'),
        library: lib,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js', ".ts", ".tsx"]
    },
    // optimization: {
    //     minimize: minimize
    // },
    plugins: plugins
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        // minimize = true;
        config.output.filename = lib + '.min.js';
    } else if (argv.mode === 'development') {
        // minimize = false;
        config.devtool = 'source-map';
        config.output.filename = lib + '.js';
    }

    return config;
};
