import {
  HANDLE_CHANGE_PAGE,
  SET_LIST,
} from './actionTypes';
import { fromJS } from 'immutable';
import { API_LIST } from '../../../network/api';

const changeListAction = (data) => {
  data = data || [];

  return {
    type: SET_LIST,
    data: fromJS(data),
  };
};

export const handleChangePageAction = (currentPage) => {
  return {
    type: HANDLE_CHANGE_PAGE,
    currentPage,
  };
};

export const getListAsyncAction = () => {
  return (dispatch) => {
    const data = {
      fromServer: true,

    };

    return global.$http.get(API_LIST, { data }).then((res) => {
      const action = changeListAction(res);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
