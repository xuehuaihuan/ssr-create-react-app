import {
  HANDLE_CHANGE_INPUT_VALUE,
  HANDLE_SEARCH_FOCUS,
  HANDLE_SEARCH_BLUR,
} from './actionTypes';

export const handleChangeInputValueAction = (inputValue) => {
  return {
    type: HANDLE_CHANGE_INPUT_VALUE,
    inputValue,
  };
};

export const handleSearchFocusAction = () => {
  return {
    type: HANDLE_SEARCH_FOCUS,
  };
};

export const handleSearchBlurAction = () => {
  return {
    type: HANDLE_SEARCH_BLUR,
  };
};
