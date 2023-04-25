import React from 'react';
import './Nav.css';
import './AccountNav.css';
import { logout } from '../features/userSlice';
import TeslaLogo from '../assets/tesla_logo.png'
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccountNavLink from './ui/AccountNavLink';
import { auth } from '../firebase/init';
import { useDispatch, useSelector } from 'react-redux';

const AccountNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <nav className="tesla__account--nav">
      <div className="nav__container">
        <Link to="/">
          <img src={TeslaLogo} alt="Tesla Logo" className="nav__logo account__nav--logo" />
        </Link>
        <ul className="nav__links tesla__account--nav--links">
          <AccountNavLink
            title="Model S"
          />
          <AccountNavLink
            title="Model 3"
          />
          <AccountNavLink
            title="Model X"
          />
          <AccountNavLink
            title="Model Y"
          />
          <AccountNavLink
            title="Solar Roofs"
          />
          <AccountNavLink
            title="Solar Panels"
          />
          <AccountNavLink
            title="Powerwall"
          />
        </ul>
        <ul className="account__nav--links">
        <li className="account__nav--list">
            <Link to="/" className={isMenuOpen ? "account__nav--link--hidden" : "account__nav--link"}>
              Shop
            </Link>
          </li>
          <li className="account__nav--list">
            <Link exact to="/login" className={isMenuOpen ? "account__nav--link--hidden" : "account__nav--link"}>
              Account
            </Link>
          </li>
          <li className="account__nav--list">
            <Link
              onClick={logoutOfApp}
              className={isMenuOpen ?
                "account__nav--link--hidden" : "account__nav--link"
              }
            >
              Logout
            </Link>
          </li>
          <div
            className="account__nav--list account__nav--link account__nav--menu--btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon="times" size="lg" className="account__nav--menu--btn" />
              ) : (
                "Menu"
              )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default AccountNav;
