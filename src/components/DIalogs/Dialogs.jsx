import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  let dialogsElements = props.state.dialogs.map(el => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));

  let messagesElements = props.state.messages.map(el => (
    <Message key={el.id} message={el.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
