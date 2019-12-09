import {
  HANDLE_CHANGE_PAGE,
  SET_LIST,
} from './actionTypes';
import { fromJS } from 'immutable';
import { API_LIST } from '../../../network/api';

export const setListAction = (data) => {
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
    return global.$http.get(API_LIST).then((res) => {
      const action = setListAction(res.data);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
