import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@loyalory/common/src/components/Typography';
import Link from '@loyalory/common/src/components/Link';

import { Image, ImageWrapper, Wrapper } from './styled.components';

const Article = ({
  className,
  src,
  url,
  srcSet,
  date,
  title,
  text,
  isSmall,
  ImgProps,
  DateProps,
  LinkProps,
  TitleProps,
  SmallTitleProps,
  TextProps,
  ...props
}) => (
  <Wrapper className={className} {...props}>
    <Link href={url} {...LinkProps}>
      <ImageWrapper>
        <Image src={src} srcSet={src} {...ImgProps} />
      </ImageWrapper>
      <Typography {...DateProps}>{date}</Typography>
      <Typography {...TitleProps} {...(isSmall ? SmallTitleProps : {})}>
        {title}
      </Typography>
    </Link>
    {text && <Typography {...TextProps}>{text}</Typography>}
  </Wrapper>
);

Article.propTypes = {
  /**
   * Url to article
   */
  url: PropTypes.string,
  /**
   * Url to image
   */
  src: PropTypes.string,
  /**
   * Set of urls to image
   */
  srcSet: PropTypes.string,
  /**
   * Article create date
   */
  date: PropTypes.node,
  /**
   * Article title
   */
  title: PropTypes.node,
  /**
   * Article content
   */
  text: PropTypes.node,
  /**
   * Use condensed version of article
   */
  isSmall: PropTypes.node,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Img component props
   */
  ImgProps: PropTypes.object,
  /**
   * Date component props
   */
  DateProps: PropTypes.object,
  /**
   * Title component props
   */
  TitleProps: PropTypes.object,
  /**
   * Link component props
   */
  LinkProps: PropTypes.object,
  /**
   * Additional title component props when article is small
   */
  SmallTitleProps: PropTypes.object,
  /**
   * Article content component props
   */
  TextProps: PropTypes.object,
};

Article.defaultProps = {
  DateProps: {
    as: 'span',
    color: 'accent',
    variant: 'h6',
    mt: 3,
    display: 'block',
  },
  TitleProps: {
    as: 'h3',
    variant: 'h3',
    color: 'black',
  },
  SmallTitleProps: {
    variant: 'h5',
  },
  TextProps: {
    color: 'gray.1',
    mt: 3,
  },
};

export default Article;
