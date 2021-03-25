import React from 'react';
import styled from 'styled-components';

import { base } from '@loyalory/common/src/utils';

const Svg = styled.svg`
  ${base};
  overflow: visible !important;
`;

const SquareBlur = props => (
  <Svg viewBox="16 16 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.2" filter="url(#square_blur_filter)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69.3333 29.3333H42.6667C35.3029 29.3333 29.3333 35.3029 29.3333 42.6667V69.3333C29.3333 76.6971 35.3029 82.6667 42.6667 82.6667H69.3333C76.6971 82.6667 82.6667 76.6971 82.6667 69.3333V42.6667C82.6667 35.3029 76.6971 29.3333 69.3333 29.3333ZM42.6667 16C27.9391 16 16 27.9391 16 42.6667V69.3333C16 84.0609 27.9391 96 42.6667 96H69.3333C84.0609 96 96 84.0609 96 69.3333V42.6667C96 27.9391 84.0609 16 69.3333 16H42.6667Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="square_blur_filter"
        x="0"
        y="0"
        width="112"
        height="112"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        <feGaussianBlur stdDeviation="8" result="effect2_foregroundBlur" />
      </filter>
    </defs>
  </Svg>
);

export default SquareBlur;
