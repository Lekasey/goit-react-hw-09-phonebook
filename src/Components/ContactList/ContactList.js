import React from 'react';
import ContactListItem from '../ContactListItem';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number}>
          <button
            className="button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
