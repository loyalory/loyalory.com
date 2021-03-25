import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import Global from '@loyalory/common/src/components/Global';
import SvgUtils from '@loyalory/common/src/components/SvgUtils';

import theme from './theme';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <Global />
      {children}
      <SvgUtils />
    </ParallaxProvider>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { default as theme } from './theme';
export default Theme;
