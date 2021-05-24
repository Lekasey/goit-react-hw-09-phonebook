import React, { useCallback } from 'react';
import defaultImage from 'bootstrap-icons/icons/person-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  return (
    <div className="d-flex align-items-center">
      <img src={defaultImage} alt="" width="32" height="32" />
      <span className="d-block mx-2">Welcome, {name}!</span>
      <button className="btn btn-primary" type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
