import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Login = props => {
  const validate = Yup.object({
    login: Yup.string()
      .max(15, 'Максимум 15 символов!')
      .required('Обязательно!'),
    email: Yup.string().email('Не корректный email!').required('Обязательно!'),
  });
  return (
    <div>
      <Formik
        initialValues={{
          login: '',
          email: '',
          rememberMe: false,
        }}
        validationSchema={validate}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {formik => (
          <div className='container mt-3'>
            <h1 className='my-4 font-weight-bold display-4'>Login</h1>
            <Form>
              <TextField label='Login' name='login' type='text' />
              <TextField label='Email' name='email' type='email' />
              <TextField
                label='RememberMe'
                name='rememberMe'
                type='checkbox'
                className='form-check-input'
              />
              <button className='btn btn-dark mt-3' type='submit'>
                Login
              </button>
              <button className='btn btn-danger mt-3 ml-3' type='reset'>
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
