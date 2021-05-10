import React from 'react';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {name}!</span>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
