import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { StyledSearch } from './styles/Search';
import {
  handleChangeInputValueAction,
  handleSearchFocusAction,
  handleSearchBlurAction,
} from './store';
import { INPUT_FOCUS_DURATION } from './constant';

const Form = (props) => {
  return (
    <StyledSearch>
      <div className='input-container'>
        <CSSTransition
          appear
          in={props.focused}
          timeout={INPUT_FOCUS_DURATION}
          classNames='slide'
        >
          <input
            type='text'
            className='search-input'
            placeholder='公共搜索'
            onFocus={props.handleSearchFocus}
            onBlur={props.handleSearchBlur}
          />
        </CSSTransition>
      </div>
      <CSSTransition
        appear
        in={props.focused}
        timeout={INPUT_FOCUS_DURATION}
        classNames='search'
      >
        <a href='/' className='button-search-container'>
          <i className='iconfont iconfont-search' />
        </a>
      </CSSTransition>
    </StyledSearch>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.getIn(['header', 'inputValue']),
    focused: state.getIn(['header', 'focused']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInputValue: (event) => {
      const inputValue = event.target.value;
      dispatch(handleChangeInputValueAction(inputValue));
    },

    handleSearchFocus () {
      dispatch(handleSearchFocusAction());
    },
    handleSearchBlur () {
      dispatch(handleSearchBlurAction());
    },
  };
};

Form.defaultProps = {
  focused: false,
};

Form.propTypes = {
  focused: PropTypes.bool,
  handleSearchFocus: PropTypes.func,
  handleSearchBlur: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
