import styled from 'styled-components';
import theme from '../../theme';

export const Info = styled.section`
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  @media(min-width: 768px) {
    width: 50%;
  }
`;

export const ProjectInfo = styled.div`
  padding-left: ${theme.margins.two};
  & h1 {
    margin-top: 0;
    margin-bottom: ${theme.margins.half};
  }

  & p,
  & h3 {
    margin: ${theme.margins.half} 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  max-width: 250px;
  flex-wrap: wrap;
  margin: 0;
  margin-top: ${theme.margins.half};

  & li {
    display: flex;
    flex-basis: 50%;
    align-items: center;
    margin-bottom: ${theme.margins.one};
    font-size: 12px;

    & svg {
      margin-right: ${theme.margins.half};
    }
  }
`;
