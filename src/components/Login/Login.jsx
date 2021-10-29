import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router';
 
const Login = props => {
  const validate = Yup.object().shape({
      email: Yup.string().email().required('Обязательно!'),
      password: Yup.string().typeError('Долно быть строкой!').required('Обязательно!')
  })
  if (props.isAuth) {
      return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validate}
        onSubmit={values => {props.login(values.email, values.password, values.rememberMe)
        }}
      >
        {({dirty, isValid}) => (
          <div className='container mt-3'>
            <h1 className='my-4 font-weight-bold display-4'>Login</h1>
            <Form>
              <TextField label='Email' name='email' type='email' />
              <TextField label='Password' name='password' type='password' />
              <TextField
                label='RememberMe'
                name='rememberMe'
                type='checkbox'
                className='form-check-input'
              />
              <button className='btn btn-dark mt-3' type='submit' disabled={!dirty || !isValid}>
                Login
              </button>
              <button className='btn btn-danger mt-3 ms-3' type='reset'>
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
