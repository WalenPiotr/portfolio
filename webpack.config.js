const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@typings': path.resolve(__dirname, 'src/typings/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@reducers': path.resolve(__dirname, 'src/reducers/'),
            '@actions': path.resolve(__dirname, 'src/actions/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
};
