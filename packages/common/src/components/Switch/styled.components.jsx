import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.label`
  ${base}
  ${theme('Switch')}
`;

export const Input = styled.input`
  ${base}
  ${theme('Switch.Input')}
`;
