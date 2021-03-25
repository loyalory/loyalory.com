import styled from 'styled-components';

import { base, theme } from '../../utils';

/**
 * Cards contain content and actions about a single subject.
 */
const Card = styled.div`
  ${theme('Card')}
  ${base}

  page-break-inside: avoid;
  break-inside: avoid;
`;

export default Card;
