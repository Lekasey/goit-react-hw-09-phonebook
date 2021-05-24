import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations } from '../redux/phonebook';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getContacts, getIsLoading, getError } from '../redux/phonebook';

export default function PhonebookView() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error && <h2 className="text-center bg-danger">{error}</h2>}
      <h1 className="visually-hidden">Phonebook</h1>

      <Form />
      <div className="mx-auto mt-4">
        <h2 className="text-center">Contacts</h2>
        <div className="d-flex">
          {contacts.length > 0 && <Filter />}
          {isLoading && (
            <Loader type="Puff" color="#00BFFF" height={25} width={25} />
          )}
        </div>
        {contacts.length > 0 ? (
          <ContactList className="mx-auto" />
        ) : (
          <p className="d-block text-center">Here will be your contacts</p>
        )}
      </div>
    </div>
  );
}

PhonebookView.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
