const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          "@Category": path.resolve(__dirname, 'src/components/Category/'),
          "@ListOfCategories": path.resolve(__dirname, 'src/components/ListOfCategories/'),
          "@PhotoCard": path.resolve(__dirname, 'src/components/PhotoCard/'),
          "@ListOfPhotoCard": path.resolve(__dirname, 'src/components/ListOfPhotoCard/'),
          "@Logo": path.resolve(__dirname, 'src/components/Logo/'),
          "@GlobalStyles": path.resolve(__dirname, 'src/styles/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}    