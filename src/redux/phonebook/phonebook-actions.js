import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));
const deleteContact = createAction('phonebook/deleteContact');
const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
