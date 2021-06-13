/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;

export default { getFilter, getAllContacts };
