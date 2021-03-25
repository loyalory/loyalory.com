import { css } from 'styled-components';
import { variant } from '@loyalory/common/src/utils';

import { transparentize } from 'polished';
import { borderRadius, colors, transition } from '../../styles';
import Typography from '../Typography';

export default {
  main: css`
    ${Typography.main};
    ${Typography.variants.button2};

    padding: 11px 48px 12px;
    white-space: nowrap;
    border-radius: ${borderRadius.large}px;
    transition: ${transition.all};

    ${variant({
      prop: 'variant',
      scale: 'Button.variants',
    })}
    ${variant({
      prop: 'size',
      scale: 'Button.sizes',
    })}
    ${variant({
      prop: 'disabled',
      scale: 'Button.disabled',
    })}
  `,
  variants: {
    default: css`
      color: ${colors.primary};
      background: transparent;
      box-shadow: none;

      &:hover {
        color: ${colors.shades.primary[1]};
      }

      &:active,
      &:focus {
        color: ${colors.shades.primary[2]};
      }
    `,
    ...['primary', 'secondary', 'accent'].reduce(
      (variants, color) => ({
        ...variants,
        [color]: css`
          color: ${colors.gray[7]};
          background: ${colors[color]};
          box-shadow: 0 24px 32px ${transparentize(0.86, colors[color])};

          &:hover {
            background: ${colors.shades[color][1]};
          }

          &:active,
          &:focus {
            background: ${colors.shades[color][2]};
            box-shadow: none;
          }
        `,
      }),
      {},
    ),
  },
  sizes: {
    small: css`
      padding: 6px 48px 7px;
      border-radius: ${borderRadius.normal}px;
      ${Typography.variants.button};
    `,
    large: css`
      padding: 15px 48px;
      ${Typography.variants.button1};
      border-radius: ${borderRadius.xLarge}px;
    `,
  },
  disabled: {
    true: css`
      color: ${props => (props.variant === 'default' ? colors.gray[4] : colors.gray[7])} !important;
      cursor: default;
      background-color: ${props =>
        props.variant === 'default' ? colors.gray[6] : colors.gray[5]} !important;
      box-shadow: none !important;
    `,
  },
};
