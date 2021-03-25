import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import _ from 'lodash';

/**
 * Render gradient defs using theme provided svg gradients
 */
const SvgUtils = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg width="0" height="0" style={{ display: 'block' }}>
      <defs>
        {_.map(theme.colors.svgGradients, ({ from, to }, name) => (
          <linearGradient id={name} x1="0%" y1="0%" x2="0%" y2="100%" key={name} gradientTransform="rotate(-45)">
            <stop offset="40%" style={{ stopColor: from, stopOpacity: 1 }} />
            <stop offset="77%" style={{ stopColor: to, stopOpacity: 1 }} />
          </linearGradient>
        ))}
      </defs>
    </svg>
  );
};

export default SvgUtils;
