import styled, { css } from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.div`
  ${theme('Box')}
  ${base}

  ${props =>
    props.flexBox &&
    css`
      display: flex;
    `}
`;
