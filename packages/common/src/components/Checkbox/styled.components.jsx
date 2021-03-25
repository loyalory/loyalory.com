import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.label`
  display: flex;
  cursor: pointer;

  ${base}
  ${theme('Checkbox')}
`;

export const Indicator = styled.span`
  ${base}
  ${theme('Checkbox.Indicator')}
`;

export const Input = styled.input`
  display: none;

  ${base}
  ${theme('Checkbox.Input')}
`;

export const Label = styled.span`
  ${base}
  ${theme('Checkbox.Label')}
`;

export const ErrorMessage = styled.span`
  ${theme('Checkbox.ErrorMessage')}
  ${base}
`;
