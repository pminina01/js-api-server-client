const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    static: path.join(__dirname, 'src'),
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css'] // TODO add JSX extension to allow webpack make imports of such files (without specifying extension in import statement)
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' /* TODO set correct loader to make code transpilation from jsx */,
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
          }
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // TODO create html template file and set correct path to html template file
    })
  ]
}
