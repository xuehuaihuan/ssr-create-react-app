import fs from 'fs';

import express from 'express';

import { resolveServer } from './path';

import cors from 'cors';

export const handleApi = (app) => {
  app.use(express.json());
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
      fs.readFile(resolveServer(`mock/api/detail/${req.body.id}.json`), 'utf8', (err, data) => {
        if (err) {
          res.status(404).send('Not Found');
          console.log(err);
          return;
        }

        res.send(data);
      });
    },
  );
};
