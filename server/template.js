import fs from 'fs';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

// import { getStyle } from './style';
import { resolveServer } from './paths';

import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';

// const { styleTags, appHtml } = getStyle();

export const getTemplate = (path) => {
  const html = (
    <StaticRouter location={path} context={{}}>
      <App />
    </StaticRouter>
  );

  const sheet = new ServerStyleSheet();
  const appHtml = renderToString(sheet.collectStyles(html));
  // appHtml = renderToString(appHtml);
  const styleTags = sheet.getStyleTags();

  let template = fs.readFileSync(resolveServer('build/index.html'), 'utf8');
  template = template.replace('<div id="root"></div>', `
      ${styleTags}
      <div id="root">
        ${appHtml}
      </div>
    `);

  return template;
};
