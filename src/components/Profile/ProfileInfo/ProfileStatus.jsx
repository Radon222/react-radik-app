import React from 'react';
// import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deActivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = event => {
    this.setState({
      status: event.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span>Status: </span>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'Add status double click'}
            </span>
          </div>
        ) : (
          <div>
            <span>Status: </span>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
