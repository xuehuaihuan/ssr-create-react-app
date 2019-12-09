import { fromJS } from 'immutable';
import {
  HANDLE_CHANGE_PAGE,
  SET_LIST,
} from './actionTypes';

const defaultState = fromJS({
  list: [],
  currentPage: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_PAGE:
      return state.set('currentPage', action.currentPage);
    case SET_LIST: {
      const list = action.data;
      const totalPage = Math.ceil(list.size / 10);
      return state.merge({
        list,
        totalPage,
      });
    }
    default:
      return state;
  }
};
