import express from 'express';
import fs from 'fs';

import { getStyle } from './style';
import { handleStatic } from './static';
import { resolveServer } from './paths';
import { DEVELOPMENT } from './constant';

// import openBrowser from 'react-dev-utils/openBrowser';
import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import chalk from 'react-dev-utils/chalk';

const { styleTags, appHtml } = getStyle();

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || '0.0.0.0';
const REACT_APP_PORT = process.env.REACT_APP_PORT;
const port = REACT_APP_PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;
const urls = prepareUrls(protocol, HOST, port);

const app = express();

handleStatic(app);

let template = fs.readFileSync(resolveServer('build/index.html'), 'utf8');
template = template.replace('<div id="root"></div>', `
    ${styleTags}
    <div id="root">
      ${appHtml}
    </div>
  `);

app.get(
  '/',
  (req, res) => {
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
