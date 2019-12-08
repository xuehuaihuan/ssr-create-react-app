import {
  SET_DETAIL,
} from './actionTypes';
import { fromJS } from 'immutable';
import { API_DETAIL } from '../../../network/api';

const setDetailAction = (data) => {
  data = data || {};

  return {
    type: SET_DETAIL,
    data: fromJS(data),
  };
};

export const getDetailAsyncAction = () => {
  return (dispatch) => {
    const data = {
      fromServer: true,
    };

    return global.$http.post(API_DETAIL, { data }).then((res) => {
      const action = setDetailAction(res);

      dispatch(action);
    }).catch((err) => {
      console.log(err);
    });
  };
};
