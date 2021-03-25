import React from 'react';
import styled from 'styled-components';

import { base } from '@loyalory/common/src/utils';

import logo from '../../assets/Logo.svg';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} alt="Startup" {...props} />;

export default Logo;
