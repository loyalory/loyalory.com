import styled from 'styled-components';
import Container from '@loyalory/common/src/components/Container';
import Img from '@loyalory/common/src/components/Img';
import { colors } from '../../styles';

export const ContainerWithBackground = styled(Container)`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 56%;
    z-index: -1;
    display: block;
    width: 100vw;
    height: 648px;
    content: '';
    background-color: ${colors.gray[6]};
    border-top-left-radius: 324px;
    border-bottom-left-radius: 324px;
  }
`;

export const RoundedImage = styled(Img)`
  border-radius: 128px 0;
`;
