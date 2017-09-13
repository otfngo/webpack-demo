const path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                  path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            }
        ]
    }
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: false,
                keepClosingSlash: true
            }
        })
    ]
}