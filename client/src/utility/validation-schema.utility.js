import * as Yup from 'yup';

import YupPassword from 'yup-password';
YupPassword(Yup);

const loginSchema = Yup.object({
  email: Yup.string().email().required('Email cannot be empty!').trim(),
  password: Yup.string().password().required(),
});

const signupSchema = Yup.object({
  userName: Yup.string().required().trim(),
  email: Yup.string().email().required('Email cannot be empty!').trim(),
  password: Yup.string().password().required(),
});

export { loginSchema, signupSchema };
