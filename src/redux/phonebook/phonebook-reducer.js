import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, { payload }) =>
    `${payload}. Some problem while loading your contacts. Try again`,
  [addContactRequest]: () => null,
  [addContactError]: (_, { payload }) =>
    `${payload}. Failed adding new contact. Try again`,
  [deleteContactRequest]: () => null,
  [deleteContactError]: (_, { payload }) =>
    `${payload}. Something went wrong. Try to delete your contact once more`,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
