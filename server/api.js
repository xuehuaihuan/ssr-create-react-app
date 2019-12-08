import fs from 'fs';

import { resolveServer } from './path';

import cors from 'cors';

export const handleApi = (app) => {
  app.use(cors());

  app.get(
    '/api/list',
    (req, res) => {
      fs.readFile(resolveServer('mock/api/list.json'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        res.send(data);
      });
    },
  );

  app.post(
    '/api/detail',
    (req, res) => {
      fs.readFile(resolveServer('mock/api/detail-0.json'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        res.send(data);
      });
    },
  );
};
