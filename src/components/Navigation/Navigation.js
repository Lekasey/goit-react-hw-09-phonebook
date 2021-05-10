import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className="link px-4 py-1"
        activeClassName="bnt btn-primary"
      >
        Main Page
      </NavLink>
      <NavLink
        exact
        to="/phonebook"
        className="link ms-2 px-4 py-1"
        activeClassName="bnt btn-primary"
      >
        Phonebook
      </NavLink>
    </div>
  );
};

export default Navigation;
