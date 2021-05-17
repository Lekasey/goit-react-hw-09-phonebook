import React from 'react';
import defaultImage from 'bootstrap-icons/icons/person-circle.svg';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className="d-flex align-items-center">
      <img src={avatar} alt="" width="32" height="32" />
      <span className="d-block mx-2">Welcome, {name}!</span>
      <button className="btn btn-primary" type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultImage,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
