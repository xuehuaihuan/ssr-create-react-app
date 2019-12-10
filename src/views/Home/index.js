import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { StyledHome } from './styles';
import {
  handleChangeInputValueAction,
} from './store';
import Figure from './Figure';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

const Home = (props) => {
  return (
    <StyledHome>
      <p className='btn-container'>
        <button
          type='button'
          className='btn-go-next-page'
          onClick={() => props.handleClick(props.history)}
        >
        go to list page - 去列表页
        </button>
      </p>
      <Figure />
      <Helmet>
        <title>react Server-Side Rendering(SSR) practice</title>
        <meta name='description' content='The SSR practice of Xue Huaihuan' />
      </Helmet>
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
    handleClick: (history) => {
      history.push('/list');
    },
  };
};

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
