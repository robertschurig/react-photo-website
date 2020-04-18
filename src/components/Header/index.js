import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.sass';

export const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item is-uppercase navbar__title" to="/">
          Robert Schurig
        </Link>

        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="nav-menu" className="navbar-menu">
        <div className="navbar-end">
          <NavLink
            to="/portraits"
            activeClassName="is-active"
            className="navbar-item nav-menu__link"
          >
            Portraits
          </NavLink>
          <NavLink
            to="/sports"
            activeClassName="is-active"
            className="navbar-item nav-menu__link"
          >
            Sports
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="is-active"
            className="navbar-item nav-menu__link"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
