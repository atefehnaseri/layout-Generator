const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
    favicon: "./public/favicon.ico"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                loaders: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [htmlPlugin]
};