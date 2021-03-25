import styled, { keyframes } from 'styled-components';

import Grid from '@loyalory/common/src/components/Grid';
import Card from '@loyalory/common/src/components/Card';
import { breakpoints } from '../../styles';

const slide = delta => keyframes`
  from {
    opacity: 0;
    transform: translate(${delta});
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const zoom = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CardWrapper = styled(Grid)`
  .cards & {
    ${Card}:nth-child(1) {
      animation: 600ms ${slide('100px, 0')};
    }
    ${Card}:nth-child(2) {
      animation: 600ms ${zoom};
    }
    ${Card}:nth-child(3) {
      animation: 600ms ${slide('-100px, 0')};
    }

    @media (max-width: ${breakpoints.lg}) {
      ${Card} {
        animation: 600ms ${slide('0, 100px')} !important;
      }
    }
  }
`;
