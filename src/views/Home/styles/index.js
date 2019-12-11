import styled from 'styled-components';

export const StyledHome = styled.div`
  .btn-container {
    padding: ${props => props.theme.scpx(10)};
  }

  .btn-go-to-list {
    display: block;
    width: 100%;
    border-radius: 2em;
    padding: ${props => props.theme.scpx(8)} ${props => props.theme.scpx(20)};
    background: ${props => props.theme.majorColor};
    font-size: ${props => props.theme.scpx(20)};
    color: ${props => props.theme.lightColor};
    transition: all 300ms linear;

    &:hover,
    &:active {
      background-color: ${props => props.theme.majorColorDark10};
    }
  }
`;
