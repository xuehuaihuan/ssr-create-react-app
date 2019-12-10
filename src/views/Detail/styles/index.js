import styled from 'styled-components';

export const StyledDetail = styled.div`
  margin-top: ${props => props.theme.scpx(10)};
  background-color: ${props => props.theme.lightColor};

  .title {
    padding: ${props => props.theme.scpx(8)} ${props => props.theme.scpx(15)};
    font-size: ${props => props.theme.scpx(20)}
  }

  .content {
    padding: 0 ${props => props.theme.scpx(15)} ${props => props.theme.scpx(8)};
  }
`;
