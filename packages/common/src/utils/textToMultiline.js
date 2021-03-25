import React from 'react';
import isArray from 'lodash/isArray';
import reactStringReplace from 'react-string-replace';

export default text =>
  reactStringReplace(isArray(text) ? text.join('') : text, '\n', (_, i) => <br key={i} />);
