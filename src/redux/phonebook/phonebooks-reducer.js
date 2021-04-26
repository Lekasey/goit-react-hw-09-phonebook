import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const presentCheck = (allContacts, newContact) => {
  const normalizedNewContact = newContact.name.toLowerCase();
  const nameSearch = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedNewContact),
  );
  if (nameSearch.length !== 0) {
    alert(`${newContact.name} is already in contacts`);
  }
  return nameSearch;
};

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return presentCheck(state, payload).length === 0
      ? [...state, payload]
      : state;
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
