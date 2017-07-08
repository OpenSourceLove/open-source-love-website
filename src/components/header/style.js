import styled from 'styled-components';
import theme from '../../theme';

export const HeaderBar = styled.header`
  height: 72px;
  background-color: ${theme.colors.white};
  border: solid 1px ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.margins.four};
  padding-right: 0;
`;

export const TabLink = styled.span`
  font-weight: bold;
  letter-spacing: 0.6px;
  text-align: center;
  color: ${theme.colors.darkGray};
  text-transform: uppercase;
  padding-right: ${theme.margins.four};
`;
