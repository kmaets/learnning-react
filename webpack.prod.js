const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname + '/dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'css'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
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
                        name: '[name].[hash].[ext]',
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
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/favicon.ico',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
        }),
        new CleanWebpackPlugin()
    ]
};