import React from 'react';
import styled from 'styled-components';
import { base } from '@loyalory/common/src/utils';
import { breakpoints, colors } from '@loyalory/themes/src/Startup/styles';

const Svg = styled.svg`
  ${base};
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 80%;
  color: ${colors.gray[6]};

  @media (max-width: ${breakpoints.md}) {
    top: 400px;
    height: 50%;
  }

  @media (max-width: ${breakpoints.sm}) {
    top: 200px;
    height: 50%;
  }
`;

const Background = props => (
  <Svg
    viewBox="0 0 1600 936"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1600 0C1416.58 448.746 967.778 531 700 404C432.222 277 255.556 228 0 296V808C362.222 1139 944.444 711 1600 785V0Z"
      fill="currentColor"
    />
  </Svg>
);

export default Background;
