import styled from 'styled-components';

export const StyledNotFound = styled.div`
  padding: ${props => props.theme.scpx(30)};
  text-align: center;
  color: ${props => props.theme.minorColor};

  .not-found-title {
    font-weight: bold;
    font-size: ${props => props.theme.scpx(36)};
    text-shadow:
      ${props => props.theme.scpx(1)} ${props => props.theme.scpx(1)} ${props => props.theme.minorColorDark10},
      ${props => props.theme.scpx(2)} ${props => props.theme.scpx(2)} ${props => props.theme.minorColorDark10};
  }

  .not-found-content {
    font-size: ${props => props.theme.scpx(18)};
    text-shadow: ${props => props.theme.scpx(1)} ${props => props.theme.scpx(1)} ${props => props.theme.minorColorDark10};
  }
`;
