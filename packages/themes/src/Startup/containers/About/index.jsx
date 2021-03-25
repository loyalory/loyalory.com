import React from 'react';
import PropTypes from 'prop-types';

import Box from '@loyalory/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@loyalory/common/src/components/Typography';
import Container from '@loyalory/common/src/components/Container';
import Button from '@loyalory/common/src/components/Button';

import data from '../../data';
import { RoundedImage } from './styled.components';

import Background from './Background';
import Squares from './Squares';

const About = ({
  name,
  title,
  text,
  cta,
  img,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  CtaProps,
  ImageWrapperProps,
  ImageProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <Background />
    <Container {...ContainerProps}>
      <Box {...ImageWrapperProps}>
        <Fade cascade duration={600}>
          <RoundedImage {...ImageProps} {...img} />
        </Fade>
        <Squares />
      </Box>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
          <Button {...CtaProps} {...cta}>
            {cta.label}
          </Button>
        </Fade>
      </Box>
    </Container>
  </Box>
);

About.propTypes = {
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
   * Wrapper for image
   * @See @loyalory/common/src/components/Box
   */
  ImageWrapperProps: PropTypes.object,
  /**
   * Welcome image props
   * @See @loyalory/common/src/components/Img
   */
  ImageProps: PropTypes.object,
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
   * Props of button below grid
   * @See @loyalory/common/src/components/Button
   */
  CtaProps: PropTypes.object,
  /**
   * Img details
   */
  img: PropTypes.object,
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
};

About.defaultProps = {
  WrapperProps: {
    overflow: {
      _: 'hidden',
      sm: 'visible',
    },
    position: 'relative',
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  ImageWrapperProps: {
    position: 'relative',
    mb: {
      _: 60,
      lg: 0,
    },
  },
  ImageProps: {
    maxWidth: '100%',
  },
  CaptionProps: {
    textAlign: {
      _: 'center',
      lg: 'left',
    },
    maxWidth: 544,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
    mb: 4,
  },
  TextProps: {
    color: 'gray.1',
    mb: 48,
  },
  CtaProps: {
    as: 'a',
    variant: 'primary',
  },
  ...data.about,
};

export default About;
