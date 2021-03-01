const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main/index.jsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['js', 'jsx']
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
