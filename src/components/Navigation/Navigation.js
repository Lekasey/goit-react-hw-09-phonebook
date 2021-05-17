import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => {
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
      {isAuthenticated && (
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
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
