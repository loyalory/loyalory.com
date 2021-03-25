import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Collapse } from 'react-collapse';

import {
  ErrorMessage,
  InputWrapper,
  Label,
  StyledInput,
  StyledTextarea,
  Wrapper,
} from './styled.components';

/**
 * Input let users enter and edit text.
 */
const Input = ({
  label,
  name,
  multiline,
  error,
  success,
  touched,
  type,
  onFocus,
  onBlur,
  suffix,
  prefix,
  WrapperProps,
  InputWrapperProps,
  LabelProps,
  ErrorMessageProps,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const InputComponent = multiline ? StyledTextarea : StyledInput;

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }

    setFocused(true);
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    setFocused(false);
  };

  return (
    <Wrapper
      className={classNames({
        focused,
        error: !!error,
        success: success || (!error && touched),
        [type]: !!type,
      })}
      {...WrapperProps}
    >
      {label && (
        <Label htmlFor={name} {...LabelProps}>
          {label}
        </Label>
      )}
      <InputWrapper {...InputWrapperProps}>
        {prefix}
        <InputComponent
          name={name}
          id={name}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {suffix}
      </InputWrapper>

      <Collapse isOpened={!!error}>
        <ErrorMessage {...ErrorMessageProps}>{error}</ErrorMessage>
      </Collapse>
    </Wrapper>
  );
};

Input.propTypes = {
  /**
   * Name of the field. It will be used also in label purposes.
   */
  name: PropTypes.string.isRequired,
  /**
   * Type of input, eg. email, date
   */
  type: PropTypes.string,
  /**
   * Label above input
   */
  label: PropTypes.node,
  /**
   * Error message
   */
  error: PropTypes.node,
  /**
   * Should use success state
   */
  success: PropTypes.bool,
  /**
   * Render as textarea
   */
  multiline: PropTypes.bool,
  /**
   * Is input touched
   */
  touched: PropTypes.bool,
  /**
   * Node placed before input component
   */
  prefix: PropTypes.node,
  /**
   * Node placed after input component
   */
  suffix: PropTypes.node,
  /**
   * On Focus function
   */
  onFocus: PropTypes.func,
  /**
   * On Blur function
   */
  onBlur: PropTypes.func,
  /**
   * Additional props for wrapper. Eg. styled system props.
   */
  WrapperProps: PropTypes.object,
  /**
   * Additional props for input wrapper. Eg. styled system props.
   */
  InputWrapperProps: PropTypes.object,
  /**
   * Additional props for label.
   */
  LabelProps: PropTypes.object,
  /**
   * Additional props for error message.
   */
  ErrorMessageProps: PropTypes.object,
};

export default Input;
