import React from 'react';
import styled from 'styled-components';
import { base } from '@loyalory/common/src/utils';
import { breakpoints, colors } from '../../styles';

const Svg = styled.svg`
  ${base};
  position: absolute;
  top: -150px;
  z-index: -1;
  width: 100%;
  height: 100%;
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
    viewBox="0 0 1600 935"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 0C183.421 448.627 632.222 530.859 900 403.893C1167.78 276.927 1344.44 227.94 1600 295.922V807.786C1237.78 1138.7 655.556 710.812 0 784.792V0Z"
      fill="currentColor"
    />
  </Svg>
);

export default Background;
