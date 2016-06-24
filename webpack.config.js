var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'index_bundle.js'
  },
  module: {
      loaders: [
          {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.css$/,
              loader: "style-loader!css-loader"
          },
          {
              test: /\.png$/,
              loader: "url-loader?limit=100000"
          },
          {
              test: /\.jpg$/,
              loader: "file-loader"
          },
          {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file'
          },
          {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
      ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
