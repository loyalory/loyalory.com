import React from 'react';

import { useField } from 'formik';

import Input from '../Input';

const FormikInput = props => {
  const [field, meta] = useField(props);

  return <Input {...props} {...field} touched={meta.touched} error={meta.touched && meta.error} />;
};

export default FormikInput;
