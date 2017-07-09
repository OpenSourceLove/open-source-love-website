import styled from 'styled-components';
import theme from '../../theme';

export const ContributorsContainer = styled.section`
  flex-shrink: 0;
  flex-basis: 100%;

  @media(min-width: 768px) {
    flex-basis: 40%;
    padding-left: ${theme.margins.three};
  }
`;

export const ContributorAvatar = styled.img`
  width: 70px;
  height: 70px;
  margin: ${theme.margins.half}
`;
