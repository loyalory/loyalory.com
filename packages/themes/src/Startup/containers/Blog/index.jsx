import React from 'react';
import PropTypes from 'prop-types';

import Box from '@loyalory/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@loyalory/common/src/components/Typography';
import Container from '@loyalory/common/src/components/Container';
import Grid from '@loyalory/common/src/components/Grid';

import Button from '@loyalory/common/src/components/Button';
import Article from '../../components/Article';

import data from '../../data';

const Blog = ({
  name,
  title,
  text,
  cta,
  articles,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  CtaWrapperProps,
  CtaProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Container {...ContainerProps}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>
      <Fade bottom cascade duration={600}>
        <Grid {...GridProps}>
          {articles.map((article, key) => (
            <Article
              key={key}
              delay={key * 100}
              isSmall={key > 0}
              {...article}
              gridArea={`article${key + 1}`}
            />
          ))}
        </Grid>
      </Fade>
      <Box {...CtaWrapperProps}>
        <Fade top cascade duration={600}>
          <Button {...CtaProps} {...cta}>
            {cta.label}
          </Button>
        </Fade>
      </Box>
    </Container>
  </Box>
);

Blog.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @loyalory/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @loyalory/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption props
   * @See @loyalory/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @loyalory/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @loyalory/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of services grid wrapper
   * @See @loyalory/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Cta container
   * @See @loyalory/common/src/components/Box
   */
  CtaWrapperProps: PropTypes.object,
  /**
   * Props of button below grid
   * @See @loyalory/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
  /**
   * List of articles
   */
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      srcSet: PropTypes.string,
      date: PropTypes.node,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
};

Blog.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  CaptionProps: {
    mb: {
      _: 4,
      lg: 5,
    },
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 3,
    textAlign: 'center',
  },
  TextProps: {
    color: 'gray.1',
    mb: 4,
  },
  GridProps: {
    gridColumnGap: {
      _: '16px',
      md: '32px',
    },
    gridRowGap: {
      _: '24px',
      md: '48px',
    },
    gridTemplateColumns: {
      _: '1fr 1fr',
      md: '2fr 1fr 1fr',
    },
    gridTemplateAreas: {
      _: '"article1 article1" "article2 article3" "article4 article5"',
      md: '"article1 article2 article3" "article1 article4 article5"',
    },
    mb: {
      _: 4,
      lg: 5,
    },
  },
  CtaWrapperProps: {
    textAlign: 'center',
  },
  CtaProps: {
    textAlign: 'center',
    mx: 'auto',
    variant: 'accent',
    as: 'a',
  },
  ...data.blog,
};

export default Blog;
