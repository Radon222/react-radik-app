import { authAPI } from '../api/api';

const SET_USER_DATA = 'radon4ik/auth/SET_USER_DATA';
const LOGIN_ERROR = 'LOGIN_ERROR';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  logErr: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        logErr: action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth, logErr) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth, logErr },
});

export const loginError = message => ({
  type: LOGIN_ERROR,
  payload: message,
});

export const getAuthUserData = () => async dispatch => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true, null));
  }
};

export const login = (email, password, rememberMe) => async dispatch => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  }
  if (response.data.resultCode !== 0) {
    let message = response.data.messages[0];
    dispatch(loginError(message));
  }
};

export const logout = () => async dispatch => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null));
  }
};

export default authReducer;
