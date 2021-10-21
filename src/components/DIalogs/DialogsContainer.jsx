import React from 'react';
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC());
  };

  let onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyAC(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
