import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
  _state: {
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
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
