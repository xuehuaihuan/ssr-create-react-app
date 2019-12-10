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
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: '10000',
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            ],
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
                    pure: true,
                  },
                ],
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                        '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('babel-preset-react-app'),
              ],
            },
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
  ],
};
