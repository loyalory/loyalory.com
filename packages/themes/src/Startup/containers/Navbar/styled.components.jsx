import React from 'react';
import styled, { css } from 'styled-components';

import * as _ from 'lodash';

import { HamburgerSpin } from 'react-animated-burgers';

import Box from '@loyalory/common/src/components/Box';
import { base } from '@loyalory/common/src/utils';

import Typography from '../../components/Typography';
import { transition } from '../../styles';

export const Wrapper = styled(Box)`
  transition: ${transition.all};

  .sticky & {
    background-color: ${props => _.get(props.theme.colors, props.stickyBgColor)};
    box-shadow: 0 36px 64px rgba(34, 39, 43, 0.06);
  }
`;

export const LogoWrapper = styled.a`
  display: block;
  ${base};
`;

// eslint-disable-next-line jsx-a11y/anchor-has-content
export const NavbarLink = styled(({ activeColor, ...props }) => <a {...props} />)`
  display: block;
  ${Typography.variants.body2};
  transition: ${transition.all};
  ${base};

  &.active {
    color: ${props => _.get(props.theme.colors, props.activeColor)};
  }
`;

export const ToggleButton = styled(HamburgerSpin)`
  outline: none;
  ${base};

  & span,
  & span::after,
  & span::before {
    background-color: ${props => _.get(props.theme.colors, props.color)};
  }
`;

export const MobileWrapper = styled(Box)`
  visibility: hidden;
  opacity: 0;
  transition: ${transition.all};
  transform: scale(1.2);
  overflow: auto;

  ${props =>
    props.isActive &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
`;
