import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

  render() {
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
              <a className="button is-white">
                Login
              </a>
            </div>
            <div className="navbar-item">
              <NavLink to={'/signup'}>
                <a className="button is-dark">
                  Sign Up
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
