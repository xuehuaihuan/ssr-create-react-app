import React from 'react';
import { connect } from 'react-redux';

import { StyledHome } from './styles';
import Search from './Search';

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

Header.defaultProps = {};

Header.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
