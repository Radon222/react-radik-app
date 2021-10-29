import { connect } from 'react-redux';
import { addPostAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPost: (message) => {
      dispatch(addPostAC(message));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
