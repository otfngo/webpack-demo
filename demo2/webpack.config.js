const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
        inline: './src/script/inline.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'https://cdn.tianya.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            }
        }),
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index2.html',
            title: 'this is a.html',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index2.html',
            title: 'this is b.html',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index2.html',
            title: 'this is c.html',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true
            },
            chunks: ['main', 'c']
        }),
        new htmlWebpackPlugin({
            filename: 'inline.html',
            template: 'inline.html',
            title: 'this is inline.html',
            inject: false,
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true,
                minifyJS: true
            }
        })
    ]
}