import React from 'react';
import './ContactListItem.css';

const ContactListItem = ({ name, number, children }) => {
  return (
    <li className="ContactListItem">
      <p>
        {name}: <span>{number}</span>
      </p>
      {children}
    </li>
  );
};

export default ContactListItem;
