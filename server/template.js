import fs from 'fs';

import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { resolveServer } from './path';
import { getStyle } from './style';
import App from '../src/App';
import { getStore } from '../src/store';

export const getTemplate = (path) => {
  const appHtml = (
    <Provider store={getStore()}>
      <StaticRouter location={path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
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
