import React from 'react';

import { StyledNotFound } from './styles';

const NotFound = (props) => {
  return (
    <StyledNotFound>
      <h3 className='not-found-title'>404</h3>
      <p className='not-found-content'>Not found</p>
    </StyledNotFound>
  );
};

export default NotFound;
