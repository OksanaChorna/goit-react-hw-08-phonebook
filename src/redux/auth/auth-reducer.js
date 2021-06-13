import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { registerSuccess, registerError, loginSuccess } from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  // [loginSuccess]: ()
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
