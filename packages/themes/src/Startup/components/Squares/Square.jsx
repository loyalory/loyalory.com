import React from 'react';
import styled from 'styled-components';

import { base } from '@loyalory/common/src/utils';

const Svg = styled.svg`
  ${base};
  overflow: visible !important;
`;

const Square = props => (
  <Svg viewBox="54 14 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#square_filter)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M107.333 27.3333H80.6667C73.3029 27.3333 67.3333 33.3029 67.3333 40.6667V67.3333C67.3333 74.6971 73.3029 80.6667 80.6667 80.6667H107.333C114.697 80.6667 120.667 74.6971 120.667 67.3333V40.6667C120.667 33.3029 114.697 27.3333 107.333 27.3333ZM80.6667 14C65.9391 14 54 25.9391 54 40.6667V67.3333C54 82.0609 65.9391 94 80.6667 94H107.333C122.061 94 134 82.0609 134 67.3333V40.6667C134 25.9391 122.061 14 107.333 14H80.6667Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="square_filter"
        x="0.666668"
        y="0.666668"
        width="186.667"
        height="186.667"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="40" />
        <feGaussianBlur stdDeviation="26.6667" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.94902 0 0 0 0 0.309804 0 0 0 0 0.156863 0 0 0 0.16 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </Svg>
);

export default Square;
