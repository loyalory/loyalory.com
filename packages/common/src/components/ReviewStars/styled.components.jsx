import styled from 'styled-components';

import { base, theme } from '../../utils';

export const Wrapper = styled.div`
  ${theme('ReviewStars')};
  ${base};
`;

export const StarSvg = styled.svg`
  ${theme('ReviewStars.Star')};
`;
