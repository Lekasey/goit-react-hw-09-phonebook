import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.contacts;

export const getIsLoading = state => state.phonebook.isLoading;

export const getError = state => state.phonebook.error;

export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  },
);
