const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
    .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

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
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@reducers': path.resolve(__dirname, 'src/reducers/'),
            '@actions': path.resolve(__dirname, 'src/actions/'),
            '@icons': path.resolve(__dirname, 'src/icons/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@styled-components': path.resolve(
                __dirname,
                'src/styled-components/',
            ),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer],
                    }),
                },
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
