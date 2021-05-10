import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        exact
        to="/register"
        className="link mr-4 px-4 py-1"
        activeClassName="bnt btn-primary "
      >
        Register
      </NavLink>
      <NavLink
        exact
        to="/login"
        className="link ms-2 px-4 py-1"
        activeClassName="bnt btn-primary"
      >
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
