import { connect } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../redux/phonebook';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
