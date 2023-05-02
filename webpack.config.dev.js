const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index-dev.tsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module : {
        rules: [
            {
                test: /\.(jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                            '@babel/preset-env',
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "template/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 3500,
          hot : true,
    }
}