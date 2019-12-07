import { fromJS } from 'immutable';
import {
  HANDLE_CHANGE_INPUT_VALUE,
} from './actionTypes';

const defaultState = fromJS({
  inputValue: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_INPUT_VALUE:
      return state.set('inputValue', action.inputValue);
    default:
      return state;
  }
};
