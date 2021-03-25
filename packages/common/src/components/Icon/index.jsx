import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled.components';

/**
 * Guidance and suggestions for using icon
 */
const Icon = ({ icon: IconElement, IconProps, ...props }) => (
  <Wrapper {...props}>
    <IconElement width={undefined} height={undefined} {...IconProps} />
  </Wrapper>
);

Icon.propTypes = {
  /**
   * Element with svg icon
   */
  icon: PropTypes.elementType.isRequired,
  /**
   * Use theme specified gradient for fill instead of currentColor
   */
  gradient: PropTypes.string,
  /**
   * Icon element specified additional props
   */
  IconProps: PropTypes.object,
};

export default Icon;
