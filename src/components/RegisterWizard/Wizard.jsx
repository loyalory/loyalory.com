import React from 'react';

import Check from '@loyalory/icons/src/line/Check';

import {StepWrap, StepDot, StepDivider} from './styled.components';

const Wizard = ({currentStep, total}) => {
  return (
    <StepWrap mr={4}>
      {Array.from({length: total}).map((item, idx) => (
        <>
          <StepDot key={item} active={currentStep >= idx + 1} current={currentStep === idx + 1}>
            {currentStep >= idx + 1 && <Check fill="#fff" />}
          </StepDot>
          {idx < total - 1 && <StepDivider active={currentStep >= idx + 2} />}
        </>
      ))}
    </StepWrap>
  )
}

export default Wizard;
