import styled from 'styled-components';

import Img from '@loyalory/common/src/components/Img';
import { base } from '@loyalory/common/src/utils';
import { borderRadius, transition } from '../../styles';

export const Wrapper = styled.div`
  position: relative;

  ${base};
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 65%;
  overflow: hidden;
  border-radius: ${borderRadius.xxLarge}px;
`;

export const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  transition: ${transition.all};

  ${Wrapper}:hover & {
    transform: scale(1.1) rotate(-1deg);
  }
`;
