import express from 'express';
import fs from 'fs';

import { getStyle } from './style';
import { handleStatic } from './static';
import { resolveServer } from './paths';

const { styleTags, appHtml } = getStyle();

const REACT_APP_PORT = process.env.REACT_APP_PORT;
const port = REACT_APP_PORT || 3030;

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
