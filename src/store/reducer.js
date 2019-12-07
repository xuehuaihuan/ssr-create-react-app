import { combineReducers } from 'redux-immutable';
import homeReducer from '../views/Home/store';

export default combineReducers({
  home: homeReducer,
});
