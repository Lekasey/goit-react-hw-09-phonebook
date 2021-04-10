import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className="filterInput"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
