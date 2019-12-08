import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

const composeEnhancers = (global && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const getStore = () => {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
  ));
};

export const getServerStore = () => {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
  ));
};

export const getClientStore = () => {
  let defaultState = window.__SERVER_STATE__;
  defaultState = fromJS(defaultState);

  return createStore(reducer, defaultState, composeEnhancers(
    applyMiddleware(thunk),
  ));
};

export default getStore;
