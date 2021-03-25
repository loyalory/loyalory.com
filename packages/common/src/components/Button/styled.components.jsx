import styled from 'styled-components';
import { base, theme } from '../../utils';

export const Wrapper = styled.button`
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: 0;

  & + & {
    margin-left: ${props => props.theme?.space?.[2] || 4}px;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  ${theme('Button')};
  ${base};
`;

export const IconWrapper = styled.span`
  ${theme('Button.Icon')};
  ${base};
`;
