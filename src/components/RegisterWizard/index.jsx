import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/';
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
import PhoneScreen2 from './PhoneScreen2';
import PhoneScreen3 from './PhoneScreen3';
import PhoneScreen4 from './PhoneScreen4';
import PhoneScreen5 from './PhoneScreen5';
import Wizard from './Wizard';

const STEPS = {
  1: {
    Screen1: PhoneScreen1,
    Screen2: PhoneScreen2,
    FormFields: () => <>
      <Fade bottom duration={600}>
        <Input key="companyName" name="companyName" type="string" placeholder="Your company name" label="Company name" autoFocus />
      </Fade>
    </>,
  },
  2: {
    Screen1: PhoneScreen4,
    Screen2: PhoneScreen3,
    FormFields: () => <>
      <Fade bottom duration={600}>
        <Input key="businessType" name="businessType" type="string" label="Select your business type" />
      </Fade>
    </>,
  },
  3: {
    Screen1: PhoneScreen3,
    Screen2: PhoneScreen5,
    FormFields: () => <>
      <Fade bottom duration={600}>
        <Input key="customizeApp" name="customizeApp" type="string" label="Customize theme" />
      </Fade>
    </>,
  },
  4: {
    Screen1: PhoneScreen5,
    Screen2: PhoneScreen1,
    FormFields: () => <>
      <Fade bottom duration={600}>
        <Input key="email" name="email" type="string" type="email" placeholder="Your email" label="Email" />
      </Fade>
    </>,
  },
}

function RegisterWizard({ TitleProps, PhoneWrapperProps, FormWrapperProps, ContainerProps }) {
  const [step, setStep] = useState(1);

  const Screen1 = STEPS[step]?.Screen1;
  const Screen2 = STEPS[step]?.Screen2;
  const FormFields = STEPS[step]?.FormFields;

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
                      <Fade cascade duration={500}>
                        {Screen1 && <Screen1 step={step} scale={0.7} {...fmProps.values} />}
                      </Fade>
                    </PhoneWrapper>
                    <PhoneWrapper2 display={{_: 'none', md: 'block'}}>
                      <Fade cascade duration={500}>
                        {Screen2 && <Screen2 step={step} scale={0.6} {...fmProps.values} />}
                      </Fade>
                    </PhoneWrapper2>
                  </Box>
                </Fade>
                <Box {...FormWrapperProps}>
                  <Fade cascade bottom duration={600}>
                    <Typography {...TitleProps}>Loyalty app in 60 seconds</Typography>
                  </Fade>
                  <Box display="flex" flexDirection="row" p={2}>
                    <Wizard total={4} currentStep={step} />
                    <Box flexGrow={1}>
                      {FormFields && <FormFields />}
                      <Button type="submit" variant="secondary" mt={4} onClick={() => step < 4 && setStep(step + 1)}>
                        {step < 4 ? 'Next' : 'Finish'}
                      </Button>
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
