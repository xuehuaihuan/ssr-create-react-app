import {
  HANDLE_CHANGE_PAGE,
  CHANGE_LIST,
} from './actionTypes';
import { fromJS } from 'immutable';
import { LIST } from '../../../network/api';

const changeListAction = (data) => {
  data = data || [];

  return {
    type: CHANGE_LIST,
    data: fromJS(data),
  };
};

export const handleChangePageAction = (currentPage) => {
  return {
    type: HANDLE_CHANGE_PAGE,
    currentPage,
  };
};

export const getListAction = () => {
  return (dispatch) => {
    const data = {
      fromServer: true,

    };

    return global.$http.get(LIST, { data }).then((res) => {
      const action = changeListAction(res);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
