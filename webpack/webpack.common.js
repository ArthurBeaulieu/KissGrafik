'use strict';

const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ['./src/js/KissGrafik.js'],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader
    ]
  },
  output: {
    filename: 'KissGrafik.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'KissGrafik', // We set a library name to bundle the export default of the class
    libraryTarget: 'global', // Make it globally available
    libraryExport: 'default' // Make KissGrafik.default become KissGrafik
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ]
};
