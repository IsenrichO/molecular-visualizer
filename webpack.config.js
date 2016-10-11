const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    path.join(__dirname, 'app/app')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: './js/bundle.js',
    publicPath: 'https://github.com/IsenrichO/molecular-visualizer/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel']
      }, { 
        test: /\.json$/, 
        loader: 'json'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/images/[name].[ext]'
      }
    ]
  },
  devServer: {
    colors: true,
    contentBase: __dirname,
    noInfo: false,
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost'
  },
  plugins: []
};
