import React from 'react';
import { connect } from 'react-redux';

import { StyledHome } from './styles';
import Search from './Search';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

const Header = (props) => {
  return (
    <StyledHome>
      <Search />
    </StyledHome>
  );
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

Header.defaultProps = defaultProps;

Header.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
