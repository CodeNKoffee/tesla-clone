import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const AccountSubNav = ({ user, isMenuOpen, setIsMenuOpen }) => {
  function logoutOfApp() {
    console.log("Hello, Tesla")
  }

  return (
    <nav>
      <div id="sub__nav--container" className="nav__container">
        <h3>
          {user?.displayName + "'s Tesla"}
        </h3>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/teslaaccount"
              className={isMenuOpen ?
                "nav__link--hidden" : "nav__link"
              }
            >
              Dashboard
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/teslaaccount"
              className={isMenuOpen ?
                "nav__link--hidden" : "nav__link"
              }
            >
              Profile Settings
            </Link>
          </li>
          <li className="nav__list">
            <Link
              onClick={logoutOfApp}
              className={isMenuOpen ?
                "nav__link--hidden" : "nav__link"
              }
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AccountSubNav;
