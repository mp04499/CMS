import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink className={"navbar-item"} to={'/home'}>
            Home
          </NavLink>
          <NavLink className={"navbar-item"} to={'/me'}>
            Me
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-white">
              Login
            </button>
          </div>
          <div className="navbar-item">
            <NavLink to={'/signup'}>
              <button className="button is-dark">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
