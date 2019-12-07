import {
  HANDLE_CHANGE_PAGE,
  CHANGE_LIST,
} from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeListAction = (data) => {
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

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const action = changeListAction(res.data);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
