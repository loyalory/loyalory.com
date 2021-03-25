import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled.components';

/**
 * Accordion is a component to rendering collapsed items.
 */
const Accordion = ({ options, renderItem, ...rest }) => {
  const [selected, setSelected] = useState(null);

  const handleChange = key => {
    if (key === selected) {
      return setSelected(null);
    }

    return setSelected(key);
  };

  return (
    <Wrapper {...rest}>
      {options.map((option, key) => (
        <li key={key}>
          {renderItem({
            option,
            key,
            onSelect: () => handleChange(key),
            isSelected: selected === key,
          })}
        </li>
      ))}
    </Wrapper>
  );
};

Accordion.propTypes = {
  /**
   * Array of options to render
   */
  options: PropTypes.array.isRequired,
  /**
   * Function for rendering item,
   * as arguments it takes current option, key, on select function, isSelected flag.
   */
  renderItem: PropTypes.func.isRequired,
};

export default Accordion;
