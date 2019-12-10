import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { StyledList } from './styles';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

import RecommendedList from './RecommendedList';

class List extends Component {
  render () {
    return (
      <StyledList>
        <RecommendedList />
        <Helmet>
          <title>SSR list</title>
          <meta name='description' content='Get asynchronous data from the server' />
        </Helmet>
      </StyledList>
    );
  }
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

List.defaultProps = defaultProps;

List.propTypes = propTypes;

List.serverLoadData = (dispatch) => {
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
