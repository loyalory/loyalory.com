import React from 'react';
import styled, { css } from 'styled-components';

import {base} from '@loyalory/common/src/utils';
import Box from '@loyalory/common/src/components/Box';

export const Wrapper = styled(Box)`
  ${base};
  min-height: calc(100vh - (80px + 64px));
  box-shadow: 0 36px 64px rgba(34, 39, 43, 0.06);
`;

export const StepWrap = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StepDot = styled.div`
  width: ${props => props.current ? '28px' : '20px'};
  height: ${props => props.current ? '28px' : '20px'};
  border-radius: 50%;
  background-color: ${props => props.active ? '#4960F6' : '#E8E8E8'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepDivider = styled.div`
  height: 50px;
  width: 2px;
  background-color: ${props => props.active ? '#4960F6' : '#E8E8E8'};
`;

export const PhoneWrapper = styled.div`
  position: relative;
  width: calc(360px * 0.7);
  overflow: hidden;
  z-index: 1;
  height: calc(780px * 0.7);
  background-color: #EC5E9B;
  border-radius: calc(40px * 0.7);
  box-shadow: 0px 0px 0px calc(10px * 0.7) #2C466C, 0px 0px 0px calc(11px * 0.7) #2a4369, 0px 0px 0px calc(20px * 0.7) #284066;
  ::before, ::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  ::after {
    bottom: 7px;
    width: calc(140px * 0.7);
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  ::before {
    top: 0px;
    width: 56%;
    height: calc(26px * 0.7);
    background-color: #2C466C;
    border-radius: 0px 0px 40px 40px;
  }
`;

export const PhoneWrapper2 = styled(PhoneWrapper)`
  z-index: 0;
  background-color: #4960F6;
  width: calc(360px * 0.6);
  height: calc(780px * 0.6);
  border-radius: calc(40px * 0.6);
  transform: translateX(-60px);
  box-shadow: 0px 0px 0px calc(10px * 0.6) #2C466C, 0px 0px 0px calc(11px * 0.6) #2a4369, 0px 0px 0px calc(20px * 0.6) #284066;
  ::after {
    width: calc(140px * 0.6);
  }
  ::before {
    height: calc(26px * 0.6);
  }
`;
