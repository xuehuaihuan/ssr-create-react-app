import React from 'react';
import PropTypes from 'prop-types';

function App (props) {
  return (
    <div className='app'>
      公共部分
      {props.children}
    </div>
  );
}

App.defaultProps = {};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
