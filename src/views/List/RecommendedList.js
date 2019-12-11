import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { StyledRecommendedList } from './styles/RecommendedList';
import { handleChangePageAction, getListAsyncAction, setListAction } from './store';

class RecommendedList extends Component {
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

    return list.map((item) => {
      return (
        <li
          key={item.id}
        >
          <button
            type='button'
            className='btn-go-to-detail'
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
      <StyledRecommendedList>
        <p className='change-action'>
          <span
            className='change-page'
            onClick={() => {
              props.handleChangePage(props.currentPage, props.totalPage, this.changePageIcon);
            }}
          >
            <i className='change-page-icon iconfont iconfont-rotate' ref={(icon) => { this.changePageIcon = icon; }} />
            <span className='change-page-text'>换一批</span>
          </span>
        </p>
        <ul className='list'>
          {this.getPageList()}
        </ul>
        <Helmet>
          <title>SSR list</title>
          <meta name='description' content='Get asynchronous data from the server' />
        </Helmet>
      </StyledRecommendedList>
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

    handleChangePage: (currentPage, totalPage, changePageIcon) => {
      let oldDegree = changePageIcon.style.transform.replace(/[^0-9]/ig, '');
      oldDegree = oldDegree ? window.parseInt(oldDegree) : 0;
      changePageIcon.style.transform = `rotate(${oldDegree + 360}deg)`;

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

RecommendedList.defaultProps = {
  currentPage: 1,
  totalPage: 1,
};

RecommendedList.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  list: PropTypes.instanceOf(List),
  getList: PropTypes.func,
  resetList: PropTypes.func,
  handleChangePage: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecommendedList));
