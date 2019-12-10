import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { StyledList } from './styles';
import { handleChangePageAction, getListAsyncAction, setListAction } from './store';

import defaultProps from './defaultProps';
import propTypes from './propTypes';

class List extends Component {
  getPageList= () => {
    const { currentPage } = this.props;
    const jsList = this.props.list.toJS();
    const len = jsList.length;
    const list = [];
    const start = (currentPage - 1) * 10;
    let end = currentPage * 10;
    end = len < end ? len : end;
    for (let i = start; i < end; i++) {
      list.push(jsList[i]);
    }

    return list.map((item, index) => {
      return (
        <li
          key={item.id}
        >
          <button
            type='button'
            onClick={() => this.handleClickItem(item.id)}
          >
            {item.keyword}
          </button>
        </li>
      );
    });
  }

  handleClickItem=(id) => {
    this.props.history.push(`/detail/${id}`);
  }

  render () {
    const props = this.props;

    return (
      <StyledList>
        List
        <p>
          <span
            onClick={() => {
              props.handleChangePage(props.currentPage, props.totalPage);
            }}
          >
            <span>换一批</span>
          </span>
        </p>
        <ul>
          {this.getPageList()}
        </ul>
        <Helmet>
          <title>SSR list</title>
          <meta name='description' content='Get asynchronous data from the server' />
        </Helmet>
      </StyledList>
    );
  }

  componentDidMount () {
    if (this.props.list.size <= 0) {
      this.props.getList();
    }
  }

  componentWillUnmount () {
    this.props.resetList();
  }
};

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['list', 'list']),
    currentPage: state.getIn(['list', 'currentPage']),
    totalPage: state.getIn(['list', 'totalPage']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => {
      dispatch(getListAsyncAction());
    },
    handleChangePage: (currentPage, totalPage) => {
      if (currentPage < totalPage) {
        dispatch(handleChangePageAction(currentPage + 1));
      } else {
        dispatch(handleChangePageAction(1));
      }
    },

    resetList: () => {
      dispatch(setListAction([]));
    },
  };
};

List.defaultProps = defaultProps;

List.propTypes = propTypes;

List.serverLoadData = (dispatch) => {
  return dispatch(getListAsyncAction());
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
