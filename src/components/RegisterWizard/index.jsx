import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Container from '@loyalory/common/src/components/Container';
import Typography from '@loyalory/common/src/components/Typography';
import Box from '@loyalory/common/src/components/Box';

import {Wrapper,  PhoneWrapper, PhoneWrapper2} from './styled.components';
import Background from './Background';
import Squares from './Squares';

function RegisterWizard({ TitleProps, PhoneWrapperProps, FormWrapperProps, ContainerProps }) {
  return (
    <Wrapper>
      <Background />
      <Container position="relative">
        <Squares />
        <Container {...ContainerProps}>
          <Fade bottom duration={500}>
            <Box {...PhoneWrapperProps}>
              <PhoneWrapper />
              <PhoneWrapper2 />
            </Box>
          </Fade>
          <Box {...FormWrapperProps}>
            <Typography {...TitleProps}>Loyalty app in 60 seconds</Typography>
          </Box>
        </Container>
      </Container>
    </Wrapper>
  )
}

RegisterWizard.propTypes = {
   TitleProps: PropTypes.object,
   PhoneWrapperProps: PropTypes.object,
   FormWrapperProps: PropTypes.object,
   ContainerProps: PropTypes.object,
};

RegisterWizard.defaultProps = {
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    color: 'black',
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '80px 0px',
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  PhoneWrapperProps: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  FormWrapperProps: {
    position: 'relative',
    flexGrow: 1,
    padding: '80px 0px',
  },
};

export default RegisterWizard;
