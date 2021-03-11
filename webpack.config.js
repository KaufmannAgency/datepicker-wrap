const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const externals = [
  'react',
  'react-dom',
  'styled-components',
  'moment',
  'date-fns',
  'date-fns/locale/fi',
  'react-datepicker',
  'react-datepicker/dist/react-datepicker.css',
];

const getExternals = (externals) => {
  const x = {};
  externals.forEach((external) => {
    x[external] = `${external}`;
  });
  return x;
};

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  externals: getExternals(externals),
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // eslint-disable-next-line global-require
              plugins: () => [require('autoprefixer')()],
              sourceMap: true,
            },
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
    ],
  },
};
