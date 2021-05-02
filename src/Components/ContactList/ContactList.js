import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import './ContactList.css';

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

export default ContactList;
