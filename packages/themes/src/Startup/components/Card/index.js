import { css } from 'styled-components';
import { boxShadow } from 'styled-system';
import { borderRadius, breakpoints, colors } from '../../styles';

export default {
  main: css`
    padding: 32px 48px;
    text-align: left;
    background-color: ${colors.gray[7]};
    border: none;
    border-radius: ${borderRadius.large}px;
    outline: none !important;
    box-shadow: 0 36px 64px rgba(34, 39, 43, 0.06);

    @media (max-width: ${breakpoints.md}) {
      box-shadow: 0 24px 36px rgba(34, 39, 43, 0.06);
    }

    button& {
      cursor: pointer;
    }

    ${boxShadow}
  `,
};
