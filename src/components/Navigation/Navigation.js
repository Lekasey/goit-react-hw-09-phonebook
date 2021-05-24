import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function Navigation({ isAuthenticated }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

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
      {isLoggedIn && (
        <NavLink
          exact
          to="/phonebook"
          className="link ms-2 px-4 py-1"
          activeClassName="bnt btn-primary"
        >
          Phonebook
        </NavLink>
      )}
    </div>
  );
}
