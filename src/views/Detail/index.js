import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { StyledDetail } from './styles';
import { getDetailAsyncAction } from './store';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

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
        <Helmet>
          <title>SSR detail</title>
          <meta name='description' content='Send parameters through post method to get asynchronous data from the server' />
        </Helmet>
        Detail
        <h3>
          {article.title}
        </h3>
        <div>
          {article.content}
        </div>
      </StyledDetail>
    );
  }

  componentDidMount () {
    if (!this.props.detail.article) {
      this.props.getDetail(this.props.match.params.id);
    }
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
  };
};

Detail.defaultProps = defaultProps;

Detail.propTypes = propTypes;

Detail.serverLoadData = (dispatch, params) => {
  return dispatch(getDetailAsyncAction(params.id));
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
