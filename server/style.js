import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export const getStyle = (appHtml) => {
  const sheet = new ServerStyleSheet();
  let style = '';
  let html = (<></>);

  try {
    html = renderToString(sheet.collectStyles(appHtml));
    style = sheet.getStyleTags();
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return {
    style,
    html,
  };
};
