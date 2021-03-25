import styled from 'styled-components';

import Img from '@loyalory/common/src/components/Img';
import { base } from '@loyalory/common/src/utils';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 92px;
  height: 92px;

  ${base};
`;

export const Image = styled(Img)`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
