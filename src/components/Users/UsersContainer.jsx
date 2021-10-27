import { connect } from 'react-redux';
import {
  setCurrentPage,
  toogleISdisabledProgress,
  getUsers,
  follow,
  unFollow
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    disabledProgress: state.usersPage.disabledProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  toogleISdisabledProgress,
  getUsers,
  follow,
  unFollow
})(UsersContainer);
