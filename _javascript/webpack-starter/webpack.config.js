const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        //path.resolve(__dirname, 'src/index.js'),
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'bundle.js'
        filename: '[name].js',
    },
    module: {
        rules:[{
            test:/\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html'
        }),
    ]
}