import React from 'react';
import styled from 'styled-components';
import { base } from '@loyalory/common/src/utils';
import { breakpoints, colors } from '../../styles';

const Svg = styled.svg`
  ${base};
  position: absolute;
  top: 0;
  left: calc(50% - 80px);
  z-index: -1;
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
    width="1140"
    height="755"
    viewBox="0 0 1140 755"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1139.95 362.929C1139.95 562.856 787.951 962.932 575.95 620.932C363.95 278.932 231.951 756.931 46.2626 432.929C-139.425 108.928 273.95 -129.07 575.95 76.9307C877.95 282.931 1139.95 163.002 1139.95 362.929Z"
      fill="currentColor"
    />
  </Svg>
);

export default Background;
