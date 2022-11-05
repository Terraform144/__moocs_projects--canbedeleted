const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * see https://webpack.js.org/
 * 
 * -webpack caching in configuration
 *      output> -->filename : '[name][contenthash].js'
 */
module.exports = {
    mode:'development',
    entry: {
        //path.resolve(__dirname, 'src/index.js'),
        bundle:path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'bundle.js'
        filename: '[name][contenthash].js',
        clean: true, // refresh distribution and avoid unnecessary caches
        assetModuleFilename:'[name][ext]', // rename well assets 
    },
    devtool: 'source-map',
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true, // hot reloading
        compress: true, // json compression
        historyApiFallback: true,
    },
    module: {
        rules:[{
            test:/\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
        { // babel configuration
            test:/\.js$/,   // will compatibl. files with old browsers
            exclude: /node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                },
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
    ]},
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]
}