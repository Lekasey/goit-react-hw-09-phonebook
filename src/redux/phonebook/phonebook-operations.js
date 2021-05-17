import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phonebook-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

const presentCheck = (allContacts, newContact) => {
  const normalizedNewContact = newContact.name.toLowerCase();
  const nameSearch = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedNewContact),
  );
  return nameSearch.length;
};

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => dispatch => {
  const newContact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  axios.get('/contacts').then(({ data }) => {
    if (presentCheck(data, newContact)) {
      alert('Contact with such name already exists');
      dispatch(addContactError('Error'));
    } else {
      axios
        .post('/contacts', newContact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
    }
  });
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
