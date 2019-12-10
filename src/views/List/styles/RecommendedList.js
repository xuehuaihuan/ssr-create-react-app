import styled from 'styled-components';

export const StyledRecommendedList = styled.div`
  .btn-go-detail {
    border-radius: 0.2em;
    border: ${props => props.theme.scpx(1)} solid ${props => props.theme.generalColor8};
    padding: ${props => props.theme.scpx(5)} ${props => props.theme.scpx(10)};
    background-color: ${props => props.theme.lightColor};
    font-size: ${props => props.theme.scpx(12)};
    line-height: 1;
    transition: all 300ms linear;

    &:hover,
    &:active {
      border-color: ${props => props.theme.generalColor2};
      background-color: ${props => props.theme.generalColor2};
      color: ${props => props.theme.lightColor};
    }
  }

  .change-action {
    padding: ${props => props.theme.scpx(10)} ${props => props.theme.scpx(15)};
  }

  .change-page {
    cursor: pointer;

    .change-page-icon {
      display: inline-block;
      transition: transform 200ms ease-in;
    }
    .change-page-text { margin-left: ${props => props.theme.scpx(6)}; }
  }

  .list {
    padding: ${props => props.theme.scpx(10)};
    background-color: ${props => props.theme.lightColor};

    > li {
      display: inline-block;
      padding: ${props => props.theme.scpx(5)};
    }
  }
`;
