import { combineReducers } from 'redux-immutable';
import homeReducer from '../views/Home/store';
import listReducer from '../views/List/store';
import detailReducer from '../views/Detail/store';

export default combineReducers({
  home: homeReducer,
  list: listReducer,
  detail: detailReducer,
});
