import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.label`
  display: flex;
  cursor: pointer;

  ${base}
  ${theme('Radio')}
`;

export const Indicator = styled.span`
  ${base}
  ${theme('Radio.Indicator')}
`;

export const Input = styled.input`
  display: none;

  ${base}
  ${theme('Radio.Input')}
`;

export const Label = styled.span`
  ${base}
  ${theme('Radio.Label')}
`;

export const ErrorMessage = styled.span`
  ${theme('Radio.ErrorMessage')}
  ${base}
`;
