import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.span`
  display: inline-block;
  svg {
    display: block;
    width: 1em;

    path,
    rect,
    ellipse {
      fill: ${props => (props.gradient ? `url(#${props.gradient})` : 'currentColor')};
    }
  }

  ${base}
  ${theme('Icon')}
`;
