import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { getStore } from './store';
import * as serviceWorker from './serviceWorker';

let renderType;
if (process.env.REACT_APP_IS_SSR === 'true') {
  renderType = 'hydrate';
} else {
  renderType = 'render';
}

console.log(process.env.REACT_APP_IS_SSR, typeof process.env.REACT_APP_IS_SSR, 'process.env.REACT_APP_IS_SSR');

ReactDOM[renderType]((
  <Provider store={getStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
