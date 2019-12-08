import React from 'react';
import { connect } from 'react-redux';

import { StyledHome } from './styles';
import {
  handleChangeInputValueAction,
} from './store';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

const Home = (props) => {
  return (
    <StyledHome>
      Home
      <p>
        <input
          type='text'
          value={props.inputValue}
          onChange={props.handleChangeInputValue}
          placeholder='please input search keywords - 请输入搜索关键词'
        />
      </p>
      <p>
        <button
          type='button'
          onClick={props.handleClick}
        >
          submit - 提交
        </button>
      </p>
    </StyledHome>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.getIn(['home', 'inputValue']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInputValue: (event) => {
      const inputValue = event.target.value;
      dispatch(handleChangeInputValueAction(inputValue));
    },
    handleClick: () => {
      console.log('me me');
    },
  };
};

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
