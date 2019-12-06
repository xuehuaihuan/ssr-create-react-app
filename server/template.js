import fs from 'fs';

import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { resolveServer } from './path';
import { getStyle } from './style';
import App from '../src/App';

export const getTemplate = (path) => {
  const appHtml = (
    <StaticRouter location={path} context={{}}>
      <App />
    </StaticRouter>
  );

  const { style, html } = getStyle(appHtml);

  const indexHtml = fs.readFileSync(resolveServer('build/index.html'), 'utf8');
  const template = indexHtml.replace('<div id="root"></div>',
    `
      ${style}
      <div id="root">
        ${html}
      </div>
    `,
  );

  return template;
};
