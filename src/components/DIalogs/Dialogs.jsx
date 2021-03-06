import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form } from 'formik';
import { TextField } from '../Login/TextField';
import * as Yup from 'yup';

const Dialogs = props => {
  const validate = Yup.object({
    message: Yup.string().max(30, 'Максимум 30 символов!'),
  });
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(el => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));

  let messagesElements = state.messages.map(el => (
    <Message key={el.id} message={el.message} />
  ));

  let onSendMessage = (values, onSubmitProps) => {
    props.sendMessage(values.message);
    onSubmitProps.resetForm();
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <Formik
            initialValues={{
              message: '',
            }}
            validationSchema={validate}
            onSubmit={onSendMessage}
          >
            {(formik) => {
              return (
                <div className='container mt-3'>
                  <h1 className='my-4 font-weight-bold display-6'>
                    Add message
                  </h1>
                  <Form>
                    <TextField label='Message' name='message' type='textarea' />
                    <button
                      className='btn btn-dark mt-3'
                      type='submit'
                      disabled={!formik.dirty || !formik.isValid}
                    >
                      Send message
                    </button>
                    <button
                      className='btn btn-danger mt-3 ms-3'
                      type='reset'
                      disabled={formik.isSubmitting || !formik.dirty}
                    >
                      Reset
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
