const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    top: './src/assets/js/top.js',
    foo: './src/assets/js/foo.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
};
