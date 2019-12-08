import express from 'express';

import $http from '../src/network/http';
import { handleApi } from './api';
import { DEVELOPMENT } from './constant';
import { handleDevEnv } from './env';
import { handleStatic } from './static';
import { handleTemplate } from './template';

const port = process.env.REACT_APP_PORT || 3030;
const NODE_ENV = process.env.NODE_ENV;
global.$http = $http;

const app = express();

handleApi(app);
handleStatic(app);

app.get(
  '*',
  (req, res) => {
    handleTemplate(req.path).then((data) => {
      res.send(data);
    }).catch((err) => {
      console.log(err);
    });
  },
);

app.listen(port, () => {});

if (NODE_ENV === DEVELOPMENT) {
  handleDevEnv(port);
}
