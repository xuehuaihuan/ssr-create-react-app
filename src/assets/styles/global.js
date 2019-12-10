import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    user-select: none;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f8f8f8;
  }

  a,
  body {
    color: #333;
  }

  a {
    text-decoration: none;
  }

  body {
    font: 16px/1.5 'Microsoft YaHei', sans-serif;
  }

  .route-switch-appear,
  .route-switch-enter {
    opacity: 0;
  }

  .route-switch-appear-active,
  .route-switch-enter-active {
    opacity: 1;
    transition: opacity 200ms linear 100ms;
    position: absolute;
    width: 100%;
  }

  .route-switch-exit {
    opacity: 1;
  }

  .route-switch-exit-active {
    opacity: 0;
    transition: opacity 100ms linear;
    position: absolute;
    width: 100%;
  }
`;
