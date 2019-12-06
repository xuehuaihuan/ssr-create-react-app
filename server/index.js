import express from 'express';

import { handleStatic } from './static';
import { getTemplate } from './template';
import { DEVELOPMENT } from './constant';

import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import chalk from 'react-dev-utils/chalk';

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || '0.0.0.0';
const REACT_APP_PORT = process.env.REACT_APP_PORT;
const port = REACT_APP_PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;
const urls = prepareUrls(protocol, HOST, port);

const app = express();

handleStatic(app);

app.get(
  '*',
  (req, res) => {
    const template = getTemplate(req.path);
    res.send(template);
  },
);

app.listen(port, () => console.log('app started at port:' + port));

if (NODE_ENV === DEVELOPMENT) {
  if (urls.lanUrlForTerminal) {
    console.log(
      `\n  ${chalk.bold('Local:')}            ${urls.localUrlForTerminal}`,
    );

    console.log(
      `  ${chalk.bold('On Your Network:')}  ${urls.lanUrlForTerminal}\n`,
    );
  } else {
    console.log(`${urls.localUrlForTerminal}`);
  }

  // openBrowser((urls.localUrlForBrowser));
}
