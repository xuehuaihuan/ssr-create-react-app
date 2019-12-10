import fs from 'fs';

import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import routes from '../src/router';
import { resolveServer } from './path';
import { getStyle } from './style';
import App from '../src/App';
import { getServerStore } from '../src/store';

const getTemplate = (path, Routes, store) => {
  let serverState = store.getState();
  serverState = serverState.toJS();
  const __SERVER_STATE__ = JSON.stringify(serverState);

  const helmetContext = {};

  const appHtml = (
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <HelmetProvider context={helmetContext}>
          <App>
            <Route
              render={
                ({ location }) => (
                  <TransitionGroup className='route-transition-group'>
                    <CSSTransition
                      key={location.key}
                      timeout={300}
                      classNames='route-switch'
                      appear
                    >
                      <Switch location={location}>
                        {Routes}
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>)
              }
            />
          </App>
        </HelmetProvider>
      </StaticRouter>
    </Provider>
  );

  const { style, html } = getStyle(appHtml);
  const { helmet } = helmetContext;

  const indexHtml = fs.readFileSync(resolveServer('build/index.html'), 'utf8');
  const template = indexHtml
    .replace('<title>title</title>', helmet.title.toString())
    .replace(/<meta name="description" content="description content"\s*\/>/, helmet.meta.toString())
    .replace('<div id="root"></div>',
    `
      ${style}
      <div id="root">
        ${html}
      </div>
      <script>
        window.__SERVER_STATE__ = ${__SERVER_STATE__}
      </script>
    `,
    );

  return template;
};

export const handleTemplate = (path) => {
  const store = getServerStore();
  const Routes = renderRoutes(routes);

  const matchedRoutes = matchRoutes(routes, path);

  const promises = [];

  matchedRoutes.forEach(({ route, match }) => {
    const serverLoadData = route.serverLoadData;
    if (serverLoadData) {
      promises.push(serverLoadData(store.dispatch, match.params));
    }
  });

  return new Promise((resolve, reject) => {
    Promise.all(promises).then(() => {
      const template = getTemplate(path, Routes, store);
      resolve(template);
    }).catch((err) => {
      reject(err);
    });
  });
};
