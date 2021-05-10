import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ name, number, onClick }) => {
  return (
    <li className="ContactListItem">
      <p>
        {name}: <span>{number}</span>
      </p>
      <button className="button" type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListItem;
