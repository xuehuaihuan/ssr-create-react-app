import fs from 'fs';

import express from 'express';

import { resolveServer } from './path';

const mimes = {
  json: 'application/json',
  png: 'image/png',
  ico: 'image/x-icon',
  txt: 'text/plain',
};

const manifestJson = 'manifest.json';
const faviconIco = 'favicon.ico';
const logo192Png = 'logo192.png';
const logo512Png = 'logo512.png';
const robotsTxt = 'robots.txt';

const manifest = fs.readFileSync(resolveServer(`build/${manifestJson}`), 'utf8');
const favicon = fs.readFileSync(resolveServer(`build/${faviconIco}`));
const logo192 = fs.readFileSync(resolveServer(`build/${logo192Png}`));
const logo512 = fs.readFileSync(resolveServer(`build/${logo512Png}`));
const robots = fs.readFileSync(resolveServer(`build/${robotsTxt}`));

const indexStatic = {
  [manifestJson]: JSON.parse(manifest),
  [faviconIco]: favicon,
  [logo192Png]: logo192,
  [logo512Png]: logo512,
  [robotsTxt]: robots,
};

export const handleStatic = (app) => {
  app.use(
    '/static',
    express.static(resolveServer('build/static')),
  );

  for (const key in indexStatic) {
    const fileExtension = key.replace(/.+\./, '');
    const contentType = mimes[fileExtension];

    app.get(
      `/${key}`,
      (req, res) => {
        res.set('Content-Type', contentType);
        res.send(indexStatic[key]);
      },
    );
  }
};
