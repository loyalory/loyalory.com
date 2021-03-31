import React from 'react';
import { useField } from 'formik';

import Input from '@loyalory/common/src/components/Input';

const SelectCategory = (props) => {
  const [field, meta] = useField(props);

  return <Input {...props} {...field} touched={meta.touched} error={meta.touched && meta.error} />;
}

export default SelectCategory;
