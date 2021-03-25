import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled.components';

/**
 * Use our powerful mobile-first css grid to build layouts of all shapes and sizes.
 */
const Grid = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Grid.propTypes = {
  /**
   * Content of grid
   */
  children: PropTypes.node.isRequired,
};

export default Grid;
