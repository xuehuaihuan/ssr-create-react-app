import React from 'react';
import App from '../src/App';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export const getStyle = () => {
  const sheet = new ServerStyleSheet();
  let styleTags = '';
  let appHtml = '';

  try {
    appHtml = renderToString(sheet.collectStyles(<App />));
    styleTags = sheet.getStyleTags();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return {
    styleTags,
    appHtml,
  };
};
