import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook';
import { getFilter } from '../../redux/phonebook';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <>
      <label className="mx-auto d-flex align-items-center" width={100}>
        Find contacts by name
        <input
          className="mx-3 form-control w-50"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

// Filter.propTypes = {
//   // value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
