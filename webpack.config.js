const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/index.html"),
    filename: "./index.html"
});
module.exports = {
    // mode: 'development',
    // entry: './src/index.js',
    entry: path.join(__dirname, "demo/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
    },
    target: 'web',
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
}