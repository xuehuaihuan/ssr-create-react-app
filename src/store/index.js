import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = (global && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const getStore = () => {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
  ));
};

export default getStore;
