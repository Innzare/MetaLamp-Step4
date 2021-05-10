const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    main: ['@babel/polyfill', './index.js']
  },

  output: {
    filename: 'assets/scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: [ //какие расширение не нужно дописывать при import
      '.js', 
      '.json', 
      '.png',
    ],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },

  optimization: {
    minimize: isProd,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],
    splitChunks: {
      chunks: 'all'
    }
  },

  devtool: isProd ? false : 'source-map',

  devServer: {
    port: 4200,
    open: true,
    hot: isDev,
    // historyApiFallback: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/favicon.ico'),
    //       to: path.resolve(__dirname, 'dist'),
    //     }
    //   ]
    // }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css'
    }),
  ],

  module: {
    rules: [

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(?:png|jpg|gif|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          context: '',
          outputPath:'assets/images/',
          publicPath:'../images/'
        }
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          context: '',
          outputPath:'assets/fonts/',
          publicPath:'../fonts/'
        }
      }
    ],
  }

};