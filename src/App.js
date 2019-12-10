import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import { GlobalStyle, GlobalResetStyle } from './assets/styles';
import { GlobalIconfontStyle } from './assets/iconfont';
import Header from './views/components/Header';

function App (props) {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Header />
        {props.children}
        <GlobalResetStyle />
        <GlobalStyle />
        <GlobalIconfontStyle />
      </div>
    </ThemeProvider>
  );
}

App.defaultProps = {};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
