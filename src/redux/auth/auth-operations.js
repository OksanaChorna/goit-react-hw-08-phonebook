/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {};

const register = credantials => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', credantials);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));
  }
};
export default { token, register };
