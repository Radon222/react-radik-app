import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
  
  let dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ];

  let messagesData = [
    { id: 1, message: 'Privet' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'HI' },
    { id: 4, message: 'Raddon' },
    { id: 5, message: 'qweqwe' },
    { id: 6, message: '234235' },
    { id: 7, message: 'next' }
  ];

  let dialogsElements = dialogsData.map( el => <DialogItem key={el.id} name={el.name} id={el.id} />);

  let messagesElements = messagesData.map( el => <Message key={el.id} message={el.message} />)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
         { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
