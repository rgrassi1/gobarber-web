import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): IErrors {
  const errors: IErrors = {};

  err.inner.forEach((error) => {
    errors[error.path] = error.message;
  });

  return errors;
}
