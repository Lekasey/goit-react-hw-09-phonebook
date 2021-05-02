import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';

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

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
