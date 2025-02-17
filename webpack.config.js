const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Собранный файл
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Для всех .js и .jsx файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Для CSS файлов
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Для SCSS файлов
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Для удобства работы с расширениями
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон для HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Статичные файлы
    },
    compress: true,
    port: 3001,
    open: true, // Автоматически откроется в браузере
  },
};
