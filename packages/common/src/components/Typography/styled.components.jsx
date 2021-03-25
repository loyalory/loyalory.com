import styled from 'styled-components';
import { typography, variant } from 'styled-system';
import { base, theme } from '../../utils';

export const Wrapper = styled.p`
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;

  ${theme('Typography')}
  ${base}
  ${typography}

  ${variant({
    prop: 'variant',
    scale: 'Typography.variants',
  })}
`;
