const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1
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
        currentPage: action.payload
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, payload: userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, payload: userId });
export const setUsersAC = users => ({ type: SET_USERS, payload: users });
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, payload: currentPage });
export const setUserTotalCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, payload: totalUsersCount });

export default usersReducer;
