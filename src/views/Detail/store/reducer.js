import { fromJS } from 'immutable';
import {
  SET_DETAIL,
} from './actionTypes';

const defaultState = fromJS({
  detail: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_DETAIL: {
      return state.set('detail', action.data);
    }
    default:
      return state;
  }
};
