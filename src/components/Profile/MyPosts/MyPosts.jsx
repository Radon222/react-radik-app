import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form } from 'formik';
import { TextField } from '../../Login/TextField';
import * as Yup from 'yup';

const MyPosts = props => {
  let postsElements = props.posts.map(el => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.post);
  };
  const validate = Yup.object({
    post: Yup.string()
      .max(30, 'Максимум 30 символов!').required()
  });

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <Formik
        initialValues={{
          post: ''
        }}
        validationSchema={validate}
        onSubmit={onAddPost}
      >
        {formik => (
          <div>
            <Form>
              <TextField label='Add post' name='post' type='textarea' />
              <button className='btn btn-dark mt-3' type='submit'>
                Add post
              </button>
              <button className='btn btn-danger mt-3 ml-3' type='reset'>
                Reset
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
