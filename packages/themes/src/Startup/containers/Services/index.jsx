import React from 'react';
import PropTypes from 'prop-types';

import Box from '@loyalory/common/src/components/Box';
import Fade from 'react-reveal/Fade';
import Typography from '@loyalory/common/src/components/Typography';
import Container from '@loyalory/common/src/components/Container';
import Grid from '@loyalory/common/src/components/Grid';

import Img from '@loyalory/common/src/components/Img';
import Button from '@loyalory/common/src/components/Button';
import data from '../../data';

const Services = ({
  name,
  title,
  text,
  cta,
  services,
  WrapperProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
  TextProps,
  GridProps,
  ServiceItemProps,
  ServiceIconProps,
  ServiceTitleProps,
  ServiceTextProps,
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
      <Grid {...GridProps}>
        {services.map((service, key) => (
          <Fade bottom cascade duration={600} delay={key * 100} key={key}>
            <Box {...ServiceItemProps}>
              <Img src={service.icon} {...ServiceIconProps} />
              <Typography {...ServiceTitleProps}>{service.title}</Typography>
              <Typography {...ServiceTextProps}>{service.text}</Typography>
            </Box>
          </Fade>
        ))}
      </Grid>
      <Fade top cascade duration={600}>
        <Button {...CtaProps} {...cta}>
          {cta.label}
        </Button>
      </Fade>
    </Container>
  </Box>
);

Services.propTypes = {
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
   * Props of single service item
   * @See @loyalory/common/src/components/Box
   */
  ServiceItemProps: PropTypes.object,
  /**
   * Props of single service icon
   * @See @loyalory/common/src/components/Img
   */
  ServiceIconProps: PropTypes.object,
  /**
   * Props of single service title
   * @See @loyalory/common/src/components/Typography
   */
  ServiceTitleProps: PropTypes.object,
  /**
   * Props of single service text
   * @See @loyalory/common/src/components/Typography
   */
  ServiceTextProps: PropTypes.object,
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
   * List of services
   */
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  /**
   * Cta button details
   */
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
    }),
  ),
};

Services.defaultProps = {
  WrapperProps: {
    py: {
      _: 56,
      md: 64,
      lg: 96,
    },
  },
  ContainerProps: {
    textAlign: 'center',
  },
  CaptionProps: {
    mb: 5,
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
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: '64px',
    maxWidth: 1088,
    mx: 'auto',
    mb: 5,
  },
  ServiceIconProps: {
    display: 'block',
    mx: 'auto',
    mb: 3,
  },
  ServiceTitleProps: {
    textAlign: 'center',
    as: 'h3',
    variant: 'h3',
    mb: 3,
  },
  ServiceTextProps: {
    color: 'gray.1',
    textAlign: 'center',
  },
  CtaProps: {
    textAlign: 'center',
    mx: 'auto',
    variant: 'secondary',
    as: 'a',
  },
  ...data.services,
};

export default Services;
