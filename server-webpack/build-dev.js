const { DEVELOPMENT } = require('./constant');
process.env.BABEL_ENV = DEVELOPMENT;
process.env.NODE_ENV = DEVELOPMENT;

const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const chalk = require('react-dev-utils/chalk');

const webpackConfig = require('./webpack.config');
const config = webpackMerge(webpackConfig, {
  mode: DEVELOPMENT,
  output: {
    path: path.join(__dirname, '../build-server-dev'),
  },
});

const compiler = webpack(config);

compiler.watch({}, (err, stats) => {
  if (err) {
    throw err;
  }

  stats = stats.toJson();
  stats.errors.forEach((err) => console.log(err));
  stats.warnings.forEach((err) => console.log(err));

  console.log(chalk.green(`\nserver ${DEVELOPMENT} enviroment build successfully.\n`));
});
