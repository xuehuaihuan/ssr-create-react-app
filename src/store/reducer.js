import { combineReducers } from 'redux-immutable';
import headerReducer from '../views/components/Header/store';
import homeReducer from '../views/Home/store';
import listReducer from '../views/List/store';
import detailReducer from '../views/Detail/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  list: listReducer,
  detail: detailReducer,
});
