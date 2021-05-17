import React from 'react';
import PropTypes from 'prop-types';
import cross from 'bootstrap-icons/icons/x-lg.svg';

const ContactListItem = ({ name, number, onClick }) => {
  return (
    <li className="list__item d-flex align-items-center mx-2 my-2 px-1 py-1">
      <p className="d-block mx-4 my-0">
        {name}: <span className="pl-2">{number}</span>
      </p>
      <button
        className="btn btn-secondary align-items-center px3 py3"
        type="button"
        onClick={onClick}
      >
        <img src={cross} alt="" width="12" height="12" />
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
