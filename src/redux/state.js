let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Redaddsffj', likesCount: 12 },
      { id: 2, message: 'ergergerg', likesCount: 10 },
    ],
    newPostText: 'radon4ik',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrew' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
      { id: 7, name: 'Valerawww' },
    ],
    messages: [
      { id: 1, message: 'Privet' },
      { id: 2, message: 'Yo' },
      { id: 3, message: 'HI' },
      { id: 4, message: 'Raddon' },
      { id: 5, message: 'qweqwe' },
      { id: 6, message: '234235' },
      { id: 7, message: 'next' },
    ],
  },
};

window.state = state;


export const addPost = () => {
  let newPost = {
    id: 10,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
