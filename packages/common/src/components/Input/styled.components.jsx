import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.div`
  ${theme('Input.Wrapper')}
  ${base}

  .ReactCollapse--collapse {
    transition: height 200ms ease-in-out;
  }

  .ReactCollapse--content {
    opacity: 0;
    transition: opacity 200ms ease-in-out 100ms;
  }

  &.error .ReactCollapse--content {
    opacity: 1;
  }
`;
export const Label = styled.label`
  ${theme('Input.Label')}
  ${base}
`;
export const InputWrapper = styled.div`
  ${theme('Input.InputWrapper')}
  ${base}
`;
export const StyledInput = styled.input`
  ${theme('Input')}
  ${base}
`;
export const ErrorMessage = styled.span`
  ${theme('Input.ErrorMessage')}
  ${base}
`;
export const StyledTextarea = StyledInput.withComponent('textarea');
