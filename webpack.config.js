var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

var common = {
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
};

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/example'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }]
    }
  })
} else {
  module.exports = merge(common, {
    entry: ['./src/App'],
    output: {
      filename: 'index.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }]
    }
  });
}
