const path = require("path");
module.exports = {
    entry: './src/components/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `index.js`,
        library :  "FlexButton",
        libraryTarget : "umd",
        globalObject : "this"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization : {
        minimize : true,
    },
    module : {
        rules: [
            {
                test: /\.(jsx|tsx)$/,
                exclude: [/node_modules/],
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
    // should not be included in react projects
    externals: {
        "react": "commonjs react",
        "react-dom": "commonjs react-dom",
    }
}