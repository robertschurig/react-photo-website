import { Link, NavLink } from 'react-router-dom';
import styles from './main-nav.module.css';

// navbar-item is-uppercase navbar__title
export const MainNav = () => {
  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={styles.navbarBrand}>
        <Link className={styles.navbarBrandLink} to="/">
          Robert Schurig
        </Link>

        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="nav-menu" className={styles.navbarMenu}>
        <div className={styles.navbarEnd}>
          <NavLink
            to="/portraits"
            activeClassName={styles.navbarItemIsActive}
            className={styles.navbarItem}
          >
            Portraits
          </NavLink>
          <NavLink
            to="/sports"
            activeClassName={styles.navbarItemIsActive}
            className={styles.navbarItem}
          >
            Sports
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName={styles.navbarItemIsActive}
            className={styles.navbarItem}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
