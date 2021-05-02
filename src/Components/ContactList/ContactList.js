import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import './ContactList.css';
// import { connect } from 'react-redux';
// import phonebookActions from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => onDeleteContact(id)}
        ></ContactListItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   return visibleContacts;
// };

// const mapStateToProps = state => {
//   const { contacts, filter } = state.phonebook;
//   return {
//     contacts: getVisibleContacts(contacts, filter),
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
