const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './vpaid.js',
  output: {
    filename: 'vpaid.js',
    path: path.resolve(__dirname, './build')
  },
  plugins: [
      new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      interface: path.resolve(__dirname, './interface'),
      VPAIDTEMPLATE: path.resolve(__dirname, './VPAIDTEMPLATE')
    }
  },
  watch: true
}
