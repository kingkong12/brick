import * as yup from 'yup';

interface FieldValue {
  email: string;
  password: string;
}

interface FormState<T extends FieldValue> {
  message: 'success' | 'error';
  error?: Record<string, string>;
  fieldValue: T;
}

// For login form
type FormStateLogin = FormState<FieldValue>;

// For registration form
interface FieldValueRegister extends FieldValue {
  confirmPassword: string;
}

type FormStateRegister = FormState<FieldValueRegister>;

export async function loginFormValidator(
  prevState: FormState,
  queryData: FormData
): Promise<FormState> {
  const email = queryData.get('email') || '';
  const password = queryData.get('password') || '';

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const dataToValidate = { email, password };

  try {
    await schema.validate(dataToValidate, { abortEarly: false });
    return {
      message: 'success',
      fieldValue: { email: '', password: '' },
    };
  } catch (validationErrors) {
    const errorsByField: Record<string, string[]> = {};
    validationErrors.inner.forEach((error: any) => {
      errorsByField[error.path] = [...(errorsByField[error.path] || []), error.message];
    });

    const keyValueErrors: Record<string, string> = {};
    Object.entries(errorsByField).forEach(([key, value]) => {
      keyValueErrors[key] = Array.isArray(value) ? value[0] : value;
    });

    return {
      message: 'error',
      error: { ...keyValueErrors },
      fieldValue: { email, password },
    };
  }
}

export async function registerFormValidator(
  prevState: FormStateRegister,
  queryData: FormData
): Promise<FormStateRegister> {
  const email = queryData.get('email') || '';
  const password = queryData.get('password') || '';
  const confirmPassword = queryData.get('confirmPassword') || '';

  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const dataToValidate = { email, password, confirmPassword };

  try {
    await schema.validate(dataToValidate, { abortEarly: false });
    return {
      message: 'success',
      fieldValue: { email: '', password: '', confirmPassword: '' },
    };
  } catch (validationErrors) {
    const errorsByField: Record<string, string[]> = {};
    validationErrors.inner.forEach((error: any) => {
      errorsByField[error.path] = [...(errorsByField[error.path] || []), error.message];
    });

    const keyValueErrors: Record<string, string> = {};
    Object.entries(errorsByField).forEach(([key, value]) => {
      keyValueErrors[key] = Array.isArray(value) ? value[0] : value;
    });

    return {
      message: 'error',
      error: { ...keyValueErrors },
      fieldValue: { email, password, confirmPassword },
    };
  }
}
