const path = require('path');

module.exports = {
  entry: './frontend/src/index.ts',
  devtool: 'inline-source-map',
  mode: "development",
  watch: false,
  externals: {
    "fabric": 'fabric',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/dist'),
    libraryTarget: 'var',
    library: 'superboard'
  },
  optimization: {
    minimize: false
  },
};