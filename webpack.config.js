const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    })
  ],
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
        loader: 'file-loader',
        query: {
          outputPath: 'assets/',
          publicPath: 'http://localhost:8080/',
          emitFile: true
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
