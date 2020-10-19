const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'css'],
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // insted of 'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // insted of 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // esModule: true,
                            // sourceMap: true,
                            importLoaders: 1,
                            // modules: true
                            modules: {
                                // compileType: 'module', // 'icss' 'module',
                                // auto: true,
                                // mode: 'global',
                                localIdentName: '[name]_[local]__[hash:base64:5]'
                            }
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'imgs'
                    }
                }
            },
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/favicon.ico',
            filename: 'index.html',
            // appMountId: 'root',
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_styles.css',
            // chunkFilename: '[id].css',
        })
    ]
};