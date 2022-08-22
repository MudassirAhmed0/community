import { IKeyValue } from '../interfaces/key-value.interface';
import React from 'react';

const ErrorProvider = (errors: Promise<IKeyValue<string>> | string, errorsSetter: React.Dispatch<React.SetStateAction<any>>) => {
  if (typeof errors === 'string') {
    errorsSetter({ main: errors });
  } else {
    errors.then(err => {
      errorsSetter(err.errors);
    });
  }
};

export default ErrorProvider;
