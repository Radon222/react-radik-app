import React, { useState } from 'react';

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = event => {
    setStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode ? (
        <div>
          <span>Status: </span>
          <span onDoubleClick={activateEditMode}>
            {props.status || 'Add status double click'}
          </span>
        </div>
      ) : (
        <div>
          <span>Status: </span>
          <input
            autoFocus={true}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
