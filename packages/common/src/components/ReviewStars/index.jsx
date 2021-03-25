import React from 'react';
import PropTypes from 'prop-types';

import range from 'lodash/range';

import { Wrapper } from './styled.components';

import Star from './Star';

const ReviewStars = ({ rate, ...props }) => (
  <Wrapper {...props}>
    {range(rate).map(star => (
      <Star active key={star} />
    ))}
    {range(5 - rate).map(star => (
      <Star key={star} />
    ))}
  </Wrapper>
);

ReviewStars.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default ReviewStars;
