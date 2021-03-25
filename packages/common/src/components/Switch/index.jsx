import React from 'react';
import PropTypes from 'prop-types';
import { Input, Wrapper } from './styled.components';

/**
 * Switch is a component to managing boolean state
 */
const Switch = ({ checked, onToggle, InputProps, ...rest }) => (
  <Wrapper className={checked ? 'checked' : ''} {...rest}>
    <Input type="checkbox" onChange={onToggle} checked={checked} {...InputProps} />
  </Wrapper>
);

Switch.propTypes = {
  /**
   * Switch state
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Toggle function for switch on change
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * HTML Input element props
   */
  InputProps: PropTypes.object,
};

export default Switch;
