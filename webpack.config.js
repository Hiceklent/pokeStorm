const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    chunkFilename: '[name].js',
    clean: true,

  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/, // Aplicar loaders a archivos .css
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS en archivos separados
          'css-loader', // Procesa CSS
          'postcss-loader', // Aplica PostCSS a CSS
          'sass-loader', // Compila Sass a CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Aplicar loader a archivos de imagen
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]', // Ruta de salida
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource', 
        generator: {
          filename: 'assets/fonts/[name][ext]', // Ruta de salida
        }, 
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: "index.html",
      minify: {
        removeComments: true, // Eliminar comentarios
        collapseWhitespace: true, // Eliminar espacios en blanco adicionales
        removeRedundantAttributes: true, // Eliminar atributos redundantes
        useShortDoctype: true, // Utilizar la forma corta del doctype
        removeEmptyAttributes: true, // Eliminar atributos vacíos
        removeScriptTypeAttributes: true, // Eliminar el atributo type="text/javascript" en los scripts
        removeStyleLinkTypeAttributes: true, // Eliminar el atributo type="text/css" en los estilos
        minifyCSS: true, // Minificar CSS dentro de los estilos
        minifyJS: true, // Minificar JavaScript dentro de los scripts
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      // chunkFilename: '[id].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    open: true,
    port: 9000,
    hot: true,
    watchFiles: ['src/**/*'],
  },

};