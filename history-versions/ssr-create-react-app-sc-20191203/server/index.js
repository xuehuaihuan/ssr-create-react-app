import express from 'express';
import fs from 'fs';

import { getStyle } from './style';
import { getTemplate } from './template';
import { handleStatic } from './static';
import { PRODUCTION } from './constant';
import { resolveServer } from './paths';

const { styleTags, appHtml } = getStyle();

const REACT_APP_PORT = process.env.REACT_APP_PORT;
const port = REACT_APP_PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

handleStatic(app);

if (NODE_ENV === PRODUCTION) {
  let template = fs.readFileSync(resolveServer('build/index.html'), 'utf8');
  template = template.replace('<div id="root"></div>', `
    <div id="root">
      ${styleTags}
      ${appHtml}
    </div>
  `);

  app.get(
    '/',
    (req, res) => {
      res.send(template);
    },
  );
} else {
  app.get(
    '/',
    (req, res) => {
      getTemplate().then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });

      res.send(
      `${appHtml}`,
      );
    },
  );
}

app.listen(port, () => console.log('yi ye shu, app started at port:' + port));
