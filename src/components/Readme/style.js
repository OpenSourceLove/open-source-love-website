import styled from 'styled-components';
import theme from '../../theme';

export const ReadmeContainer = styled.section`
  max-height: ${props => (props.open ? 'auto' : '500px')};
  overflow: hidden;
  position: relative;

  &:after {
    height: 40px;
    display: ${props => (props.open ? 'none' : 'auto')};
    width: 100%;
    content:'';
    bottom: 0;
    position: absolute;
    left: 0;
    background: linear-gradient(to top,  ${theme.colors
      .bg} 0%,rgba(255,255,255,0))
  }
`;

export const Helper = styled.span`
  margin-right: ${theme.margins.half};
`;
