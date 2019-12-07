import { fromJS } from 'immutable';
import {
  CHANGE_LIST,
} from './actionTypes';

const defaultState = fromJS({
  list: [],
  currentPage: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST: {
      const list = action.data.get('data');
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
