import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return visibleContacts;
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;
  return {
    contacts: getVisibleContacts(contacts, filter),
  };
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
