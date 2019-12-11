import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';

import { StyledDetail } from './styles';
import { getDetailAsyncAction, setDetailAction } from './store';

class Detail extends Component {
  render () {
    const { detail } = this.props;

    let article;
    if (detail.article) {
      article = detail.article;
    } else {
      article = {};
    }

    return (
      <StyledDetail>
        <h3 className='title'>
          {article.title}
        </h3>
        <div className='content'>
          {article.content}
        </div>
        <Helmet>
          <title>SSR detail</title>
          <meta name='description' content='Send parameters through post method to get asynchronous data from the server' />
        </Helmet>
      </StyledDetail>
    );
  }

  componentDidMount () {
    if (!this.props.detail.article) {
      this.props.getDetail(this.props.match.params.id);
    }
  }

  componentWillUnmount () {
    this.props.resetDetail();
  }
};

const mapStateToProps = (state) => {
  let detail = state.getIn(['detail', 'detail']);

  if (detail && detail.toJS) {
    detail = detail.toJS();
  }
  return {
    detail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (id) => {
      dispatch(getDetailAsyncAction(id));
    },
    resetDetail: () => {
      dispatch(setDetailAction({}));
    },
  };
};

Detail.defaultProps = {
  detail: fromJS({}),
};

Detail.propTypes = {
  detail: PropTypes.object,
  match: PropTypes.object,
  getDetail: PropTypes.func,
  resetDetail: PropTypes.func,
};

Detail.serverLoadData = (dispatch, params) => {
  return dispatch(getDetailAsyncAction(params.id));
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
