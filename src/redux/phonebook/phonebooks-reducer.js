import { combineReducers } from 'redux';
import types from './phonebook-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD: {
      const normalizedNewContact = payload.name.toLowerCase();
      const nameSearch = state.filter(contact =>
        contact.name.toLowerCase().includes(normalizedNewContact),
      );
      if (nameSearch.length !== 0) {
        alert(`${payload.name} is already in contacts`);
      }
      return nameSearch.length === 0 ? [...state, payload] : state;
    }

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
