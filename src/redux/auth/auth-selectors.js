/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getIsAuthenticated = state => state.auth.token;
const getUserName = state => state.auth.user.name;

export default { getIsAuthenticated, getUserName };
