import styled from 'styled-components';
import theme from '../../theme';

export const Repo = styled.section`
  max-width: 100%;
	width: 960px;
	padding: 0 ${theme.margins.two};
	margin: auto;
	display: flex;
	align-items: space-between;
	margin-top: ${theme.margins.four};
`;

export const Main = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
