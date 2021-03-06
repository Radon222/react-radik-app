import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_DISABLED_PROGRESS = 'TOGGLE_IS_DISABLED_PROGRESS';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  disabledProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case TOGGLE_IS_DISABLED_PROGRESS:
      return {
        ...state,
        disabledProgress: action.payload.isFetching
          ? [...state.disabledProgress, action.payload.userId]
          : state.disabledProgress.filter(id => id !== action.payload.userId),
      };
    default:
      return state;
  }
};

export const followSucces = userId => ({ type: FOLLOW, payload: userId });
export const unFollowSucces = userId => ({ type: UNFOLLOW, payload: userId });
export const setUsers = users => ({ type: SET_USERS, payload: users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
export const toogleISdisabledProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_DISABLED_PROGRESS,
  payload: { isFetching, userId },
});

export const requestUsers = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const follow = userId => async dispatch => {
  dispatch(toogleISdisabledProgress(true, userId));
  let response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSucces(userId));
  }
  dispatch(toogleISdisabledProgress(false, userId));
};

export const unFollow = userId => async dispatch => {
  dispatch(toogleISdisabledProgress(true, userId));
  let response = await usersAPI.unFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unFollowSucces(userId));
  }
  dispatch(toogleISdisabledProgress(false, userId));
};

export default usersReducer;
