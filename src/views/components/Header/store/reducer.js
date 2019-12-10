import { fromJS } from 'immutable';
import {
  HANDLE_CHANGE_INPUT_VALUE,
  HANDLE_SEARCH_FOCUS,
  HANDLE_SEARCH_BLUR,
} from './actionTypes';

const defaultState = fromJS({
  inputValue: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_INPUT_VALUE:
      return state.set('inputValue', action.inputValue);
    case HANDLE_SEARCH_FOCUS:
      return state.set('focused', true);
    case HANDLE_SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state;
  }
};
