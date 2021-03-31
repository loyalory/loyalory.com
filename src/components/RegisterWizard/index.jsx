import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Form, Formik } from 'formik';

import Container from '@loyalory/common/src/components/Container';
import Typography from '@loyalory/common/src/components/Typography';
import Box from '@loyalory/common/src/components/Box';
import Input from '@loyalory/common/src/components/Formik/Input';
import Button from '@loyalory/common/src/components/Button';

import {Wrapper,  PhoneWrapper, PhoneWrapper2} from './styled.components';
import Background from './Background';
import Squares from './Squares';
import PhoneScreen1 from './PhoneScreen1';
import Wizard from './Wizard';

function RegisterWizard({ TitleProps, PhoneWrapperProps, FormWrapperProps, ContainerProps }) {
  return (
    <Formik
      // validationSchema={mailer.validationSchema}
      // onSubmit={mailer.onSubmit}
      initialValues={{
        companyName: ''
      }}
    >
      {fmProps => (
        <Form>
          <Wrapper pt={80}>
            <Background />
            <Container position="relative">
              <Squares />
              <Container {...ContainerProps}>
                <Fade cascade bottom duration={500}>
                  <Box {...PhoneWrapperProps}>
                    <PhoneWrapper>
                      <PhoneScreen1 scale={0.7} companyName={fmProps.values.companyName} />
                    </PhoneWrapper>
                    <PhoneWrapper2 display={{_: 'none', md: 'block'}} />
                  </Box>
                </Fade>
                <Box {...FormWrapperProps}>
                  <Fade cascade bottom duration={600}>
                    <Typography {...TitleProps}>Loyalty app in 60 seconds</Typography>
                  </Fade>
                  <Box display="flex" flexDirection="row" p={2}>
                    <Wizard total={4} currentStep={2} />
                    <Box flexGrow={1}>
                      <Fade cascade bottom duration={600}>
                        <div>
                          <Input key="companyName" name="companyName" type="string" placeholder="Your company name" label="Company name" />
                        </div>
                        <Button type="submit" variant="secondary" mt={4}>
                          Next
                        </Button>
                      </Fade>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Container>
          </Wrapper>
        </Form>
      )}
    </Formik>
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
    textAlign: 'center',
    mb: 4,
  },
  ContainerProps: {
    display: 'flex',
    justifyContent: 'space-between',
    p: {
      _: 0,
      lg: 4,
    },
    flexDirection: {
      _: 'column',
      lg: 'row',
    },
  },
  PhoneWrapperProps: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormWrapperProps: {
    position: 'relative',
    flexGrow: 1,
    padding: '40px 0px',
  },
};

export default RegisterWizard;
