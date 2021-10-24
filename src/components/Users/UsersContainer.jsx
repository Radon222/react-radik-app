import { connect } from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  setUserTotalCountAC,
  unFollowAC,
} from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUserTotalCountAC(totalCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
