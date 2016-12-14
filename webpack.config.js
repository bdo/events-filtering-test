const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.sass$/, loader: "style!css!sass?indentedSyntax" },
      { test: /\.json?$/, loader: 'json' },
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};

