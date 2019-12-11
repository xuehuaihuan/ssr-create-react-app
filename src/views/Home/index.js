import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import { StyledHome } from './styles';
import Figure from './Figure';

class Home extends Component {
  render () {
    return (
      <StyledHome>
        <p className='btn-container'>
          <button
            type='button'
            className='btn-go-to-list'
            onClick={() => this.handleClick()}
          >
            Go to list - 去列表
          </button>
        </p>
        <Figure />
        <Helmet>
          <title>react Server-Side Rendering(SSR) practice</title>
          <meta name='description' content='The SSR practice of Xue Huaihuan' />
        </Helmet>
      </StyledHome>
    );
  }

  handleClick=() => {
    this.props.history.push('/list');
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

Home.defaultProps = {
};

Home.propTypes = {
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
