import styled from 'styled-components';

export const StyledFigure = styled.div`
  .img-container img {
    display: block;
    width: 100%;
  }

  figcaption {
    padding: ${props => props.theme.scpx(8)} ${props => props.theme.scpx(12)};
    font-size: ${props => props.theme.scpx(20)};
    color: ${props => props.theme.majorColor};
  }

  .figure {
    &:not(:first-child) {
      margin-top: ${props => props.theme.scpx(12)};
    }
    background-color: ${props => props.theme.lightColor};
  }
`;
