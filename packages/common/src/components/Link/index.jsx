import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled.components';

/**
 * Basic anchor component
 */
const Link = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Link.propTypes = {
  /**
   * Content of the link
   */
  children: PropTypes.node.isRequired,
  /**
   * Component which will be used instead of default
   */
  as: PropTypes.elementType,
};

Link.defaultProps = {
  as: 'a',
};

export default Link;
