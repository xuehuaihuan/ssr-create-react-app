import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledList } from './styles';
import { handleChangePageAction, getListAction } from './store';

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
          >
            {item.keyword}
          </button>
        </li>
      );
    });
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
      </StyledList>
    );
  }

  componentDidMount () {
    if (this.props.list.size <= 0) {
      this.props.getList();
    }
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
      dispatch(getListAction());
    },
    handleChangePage: (currentPage, totalPage) => {
      if (currentPage < totalPage) {
        dispatch(handleChangePageAction(currentPage + 1));
      } else {
        dispatch(handleChangePageAction(1));
      }
    },
  };
};

List.defaultProps = defaultProps;

List.propTypes = propTypes;

List.loadData = (dispatch) => {
  return dispatch(getListAction());
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
