const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const getServerEnvironment = require('./env');

const env = getServerEnvironment('/');

module.exports = {
  target: 'node',
  entry: './server/index',
  output: {
    filename: 'server.js',
    publicPath: '/',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                ssr: true,
              },
            ],
          ],
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('babel-preset-react-app'),
          ],
        },
      },
      // {
      // oneOf: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 1000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      // ],
      // },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
  ],
};
