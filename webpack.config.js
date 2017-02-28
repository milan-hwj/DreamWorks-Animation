var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main : './src/js/main.js'
    },
    output: {
        filename : './release/[name].js',
    },
    devtool: '#source-map',
    resolve: {
        root: [path.resolve('./src'), path.resolve('./lib')],
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("./release/[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './release/index.html',
            template: './src/html/index.html',
            inject: false
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: false,
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!autoprefixer-loader!less-loader')
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
