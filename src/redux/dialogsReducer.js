const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
  ],
  messages: [
    { id: 1, message: 'Privet' },
    { id: 2, message: 'Yo' },
  ],
  newMessageBody: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.payload,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageAC = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyAC = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  payload: text,
});

export default dialogsReducer;
