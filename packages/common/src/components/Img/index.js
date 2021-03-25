import styled from 'styled-components';
import { base, theme } from '../../utils';

/**
 * Use prestyled images
 */
const Img = styled.img`
  ${base};
  ${theme('Img')};
`;

export default Img;
