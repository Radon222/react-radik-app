import { connect } from 'react-redux';
import {
  setCurrentPage,
  toogleISdisabledProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = pageNumber => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
          follow={this.props.followThunkCreator}
          unFollow={this.props.unFollowThunkCreator}
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
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
})(UsersContainer);
