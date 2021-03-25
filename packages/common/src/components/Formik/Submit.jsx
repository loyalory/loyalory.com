import React from 'react';

import { useFormikContext } from 'formik';

import Button from '../Button';

const FormikSubmit = props => {
  const { isSubmitting } = useFormikContext();
  return <Button {...props} disabled={isSubmitting} />;
};

export default FormikSubmit;
