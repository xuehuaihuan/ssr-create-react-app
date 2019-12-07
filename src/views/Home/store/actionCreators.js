import {
  HANDLE_CHANGE_INPUT_VALUE,
} from './actionTypes';

export const handleChangeInputValueAction = (inputValue) => {
  return {
    type: HANDLE_CHANGE_INPUT_VALUE,
    inputValue,
  };
};
