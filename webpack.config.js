const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

const config = {
  entry: APP_PATH,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[local]--[hash:base64:5]',
                        },
                    }
                }
            ]
        },
        {
            test: /\.svg$/,
            use: "file-loader",
        },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
  ],
};

module.exports = config;
