const { PRODUCTION } = require('./constant');
process.env.BABEL_ENV = PRODUCTION;
process.env.NODE_ENV = PRODUCTION;

const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackConfig = require('./webpack.config');
const config = webpackMerge(webpackConfig, {
  mode: PRODUCTION,
  output: {
    path: path.join(__dirname, '../build'),
  },
});

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    throw err;
  }

  stats = stats.toJson();
  stats.errors.forEach((err) => console.log(err));
  stats.warnings.forEach((err) => console.log(err));

  console.log('build successfully!');
});
