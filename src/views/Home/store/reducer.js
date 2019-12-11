import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputValue: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
