import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import * as _ from 'lodash';

import { Wrapper } from './styled.components';

/**
 * Slider is a carousel of given elements.
 */
const Slider = ({ options, children, ...props }) => {
  const ref = useRef();

  return (
    <Wrapper {...props}>
      <Slick ref={ref} {...options}>
        {_.isFunction(children) ? children(ref) : children}
      </Slick>
    </Wrapper>
  );
};

Slider.propTypes = {
  /**
   * List of elements which will be slides
   * or function with passed Slick ref as argument and returns node with slides
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * Slick.js options object
   */
  options: PropTypes.object,
};

export default Slider;
