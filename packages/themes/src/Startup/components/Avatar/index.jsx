import React from 'react';
import PropTypes from 'prop-types';

import { Image, Wrapper } from './styled.components';

const Avatar = ({ className, src, srcSet, ImgProps, ...props }) => (
  <Wrapper className={className} {...props}>
    <Image src={src} srcSet={src} {...ImgProps} />
  </Wrapper>
);

Avatar.propTypes = {
  /**
   * Url to image
   */
  src: PropTypes.string,
  /**
   * Set of urls to image
   */
  srcSet: PropTypes.string,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Img component props
   */
  ImgProps: PropTypes.object,
};

export default Avatar;
