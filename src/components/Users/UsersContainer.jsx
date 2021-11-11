import { connect } from 'react-redux';
import {
  setCurrentPage,
  toogleISdisabledProgress,
  requestUsers,
  follow,
  unFollow,
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getDisabledProgress,
} from '../../redux/users-selectors';

class UsersContainer extends React.PureComponent {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = pageNumber => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          disabledProgress={this.props.disabledProgress}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    disabledProgress: getDisabledProgress(state),
  };
};

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    setCurrentPage,
    toogleISdisabledProgress,
    requestUsers,
    follow,
    unFollow,
  })
)(UsersContainer);
