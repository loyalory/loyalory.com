import styled from 'styled-components';
import { theme } from '../../utils';

import Box from '../Box';

export const Wrapper = styled(Box)`
  .slick-slider {
    position: relative;
    display: block;
    touch-action: pan-y;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
    overflow: hidden;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-slider {
    .slick-track,
    .slick-list {
      transform: translate3d(0, 0, 0);
    }
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;

    &::before,
    &::after {
      display: table;
      content: '';
    }

    &::after {
      clear: both;
    }

    .slick-loading .slick-track {
      visibility: hidden;
    }
  }

  .slick-slide {
    display: none;
    height: 100%;
    min-height: 1px;
    outline: none !important;

    img,
    div {
      outline: none !important;
    }

    img {
      display: block;
    }

    .slick-slide.slick-loading img {
      display: none;
    }

    &.dragging img {
      pointer-events: none;
    }
  }

  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  ${theme('Slider')}
`;
