const path = require('path');

/**
 * Uses the src/index.js as entry point to bundle it. If this file imports other js files they will also be bundled.
 * Bundled files will result in bundle.js
 * The /dist folder will be used to serve application to the browser.
 */
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
