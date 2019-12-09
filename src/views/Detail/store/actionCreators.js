import {
  SET_DETAIL,
} from './actionTypes';
import { fromJS } from 'immutable';
import { API_DETAIL } from '../../../network/api';

export const setDetailAction = (data) => {
  data = data || {};

  return {
    type: SET_DETAIL,
    data: fromJS(data),
  };
};

export const getDetailAsyncAction = (id) => {
  return (dispatch) => {
    const data = {
      id,
    };

    return global.$http.post(API_DETAIL, data).then((res) => {
      const action = setDetailAction(res);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
