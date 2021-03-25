import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StarSvg } from './styled.components';

const Star = ({ active }) => (
  <StarSvg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classNames({
      active,
    })}
  >
    <path
      d="M12 0L14.6944 8.29147L23.4127 8.2918L16.3596 13.4165L19.0534 21.7082L12 16.584L4.94658 21.7082L7.64036 13.4165L0.587322 8.2918L9.30559 8.29147L12 0Z"
      fill="currentColor"
    />
  </StarSvg>
);

Star.propTypes = {
  active: PropTypes.bool,
};

export default Star;
