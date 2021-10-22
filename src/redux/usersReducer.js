const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
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
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, payload: userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, payload: userId });
export const setUsersAC = users => ({ type: SET_USERS, payload: users });

export default usersReducer;
