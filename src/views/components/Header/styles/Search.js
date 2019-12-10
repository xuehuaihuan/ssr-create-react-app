import styled from 'styled-components';
import { INPUT_FOCUS_DURATION } from '../constant';

export const StyledSearch = styled.form`
  position: relative;
  font-size: ${props => props.theme.scpx(16)};

  .input-container {
    padding: ${props => props.theme.scpx(8)} ${props => props.theme.scpx(15)};
  }

  .search-input {
    border-radius: ${props => props.theme.scpx(36)};
    padding: ${props => props.theme.scpx(7)} ${props => props.theme.scpx(18)};
    width: calc(100% - 40px);
    background: ${props => props.theme.generalColor6};
    line-height: 1.5;

    &.slide-enter {
      width: calc(100% - 40px);
    }

    &.slide-enter-active,
    &.slide-enter-done,
    &.slide-exit {
      width: 100%;
    }

    &.slide-exit-active {
      width: calc(100% - 40px);
    }

    &.slide-enter-active,
    &.slide-exit-active {
      transition: width ${INPUT_FOCUS_DURATION}ms linear;
    }
  }

  .button-search-container {
    position: absolute;
    top: 50%;
    right: ${props => props.theme.scpx(6)};
    border-radius: 50%;
    margin-top: ${props => props.theme.scpx(-15)};
    padding: ${props => props.theme.scpx(6)};
    background-color: ${props => props.theme.transparent};
    color: ${props => props.theme.lightColor};
    font-size: ${props => props.theme.scpx(18)};
    line-height: 1;

    &.search-enter-active,
    &.search-enter-done,
    &.search-exit {
      right: ${props => props.theme.scpx(20)};
      background-color: ${props => props.theme.generalColor8};
      color: ${props => props.theme.lightColor};
    }

    &.search-exit-active,
    &.search-exit-done {
      right: ${props => props.theme.scpx(6)};
      background-color: ${props => props.theme.transparent};
      color: ${props => props.theme.lightColor};
    }

    &.search-enter-active,
    &.search-exit-active {
      transition: all ${INPUT_FOCUS_DURATION}ms linear;
    }

    .iconfont-search {
      display: block;
    }
  }
`;
