import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Main Page
      </NavLink>
      <NavLink
        exact
        to="/phonebook"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Phonebook
      </NavLink>
    </div>
  );
};

export default Navigation;
