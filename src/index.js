import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { HelmetProvider } from 'react-helmet-async';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import App from './App';
import { getClientStore } from './store';
import routes from './router';
import $http from './network/http';
import * as serviceWorker from './serviceWorker';

let renderType;
if (process.env.REACT_APP_IS_SSR === 'true') {
  renderType = 'hydrate';
} else {
  renderType = 'render';
}

global.$http = $http;

console.log(`process.env.REACT_APP_IS_SSR: ${process.env.REACT_APP_IS_SSR}`, `renderType: ${renderType}`);

const Routes = renderRoutes(routes);
const store = getClientStore();

ReactDOM[renderType]((
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App>
          <Route
            render={
              ({ location }) => (
                <TransitionGroup className='route-transition-group'>
                  <CSSTransition
                    key={location.key}
                    timeout={200}
                    classNames='route-switch'
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
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
