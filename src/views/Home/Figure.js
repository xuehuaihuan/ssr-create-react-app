import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import SSRvsCSR from '../../assets/img/SSR-vs-CSR.png';
import SSR from '../../assets/img/SSR.png';
import CSR from '../../assets/img/CSR.png';

import { StyledFigure } from './styles/Figure';

const Figure = (props) => {
  return (
    <StyledFigure>
      <figure className='figure'>
        <figcaption>
          SSR-vs-CSR
        </figcaption>
        <p className='img-container'>
          <img alt='SSR-vs-CSR' src={SSRvsCSR} />
        </p>
      </figure>
      <figure className='figure'>
        <figcaption>
          SSR
        </figcaption>
        <p className='img-container'>
          <img alt='SSR' src={SSR} />
        </p>
      </figure>
      <figure className='figure'>
        <figcaption>
          CSR
        </figcaption>
        <p className='img-container'>
          <img alt='CSR' src={CSR} />
        </p>
      </figure>
      <Helmet>
        <title>react Server-Side Rendering(SSR) practice</title>
        <meta name='description' content='The SSR practice of Xue Huaihuan' />
      </Helmet>
    </StyledFigure>
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

export default connect(mapStateToProps, mapDispatchToProps)(Figure);
