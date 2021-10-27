import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19756;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);