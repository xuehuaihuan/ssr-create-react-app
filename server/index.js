import express from 'express';

import { DEVELOPMENT } from './constant';
import { handleDevEnv } from './env';
import { handleStatic } from './static';
import { getTemplate } from './template';

const REACT_APP_PORT = process.env.REACT_APP_PORT;
const port = REACT_APP_PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;

const app = express();

handleStatic(app);

app.get(
  '*',
  (req, res) => {
    const template = getTemplate(req.path);
    res.send(template);
  },
);

app.listen(port, () => {});

if (NODE_ENV === DEVELOPMENT) {
  handleDevEnv(port);
}
