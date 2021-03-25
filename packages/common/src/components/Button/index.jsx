import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper, Wrapper } from './styled.components';
import Icon from '../Icon';

/**
 * Buttons allow users to take actions, and make choices, with a single tap. They are also prepared to working as a custom urls or route links.
 */
const Button = ({ children, icon, iconPlacement, ...props }) => (
  <Wrapper {...props}>
    {icon && iconPlacement === 'left' && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
    <span>{children}</span>
    {icon && iconPlacement === 'right' && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
  </Wrapper>
);

Button.propTypes = {
  /**
   * Content of the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Component which will be used instead of default
   */
  as: PropTypes.elementType,
  /**
   * Icon added to the button
   */
  icon: PropTypes.elementType,
  /**
   * Placement of icon
   */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  as: 'button',
  iconPlacement: 'right',
};

export default Button;
