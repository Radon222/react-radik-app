import React from 'react';
import { connect } from 'react-redux';
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyAC(body));
    },
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
