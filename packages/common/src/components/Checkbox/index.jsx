import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Collapse } from 'react-collapse';

import Check from '@loyalory/icons/src/line/Check'

import { Indicator, Input, Label, Wrapper, ErrorMessage } from './styled.components';

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
const Checkbox = ({
  checked,
  label,
  error,
  onToggle,
  InputProps,
  LabelProps,
  IndicatorProps,
  ...rest
}) => (
  <>
    <Wrapper
      className={classNames({
        checked,
        error: !!error,
      })}
      {...rest}
    >
      <Input type="checkbox" onChange={onToggle} checked={checked} {...InputProps} />
      <Indicator {...IndicatorProps}>
        <Check />
      </Indicator>
      {label && <Label {...LabelProps}>{label}</Label>}
    </Wrapper>
    <Collapse isOpened={!!error}>
      <ErrorMessage>{error}</ErrorMessage>
    </Collapse>
  </>
);

Checkbox.propTypes = {
  /**
   * Checkbox state
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Toggle function for switch on change
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Label node
   */
  label: PropTypes.node,
  /**
   * HTML Input element props
   */
  InputProps: PropTypes.object,
  /**
   * HTML Span element props
   */
  LabelProps: PropTypes.object,
  /**
   * HTML Span element props
   */
  IndicatorProps: PropTypes.object,
  /**
   * Error message
   */
  error: PropTypes.node,
};

export default Checkbox;
