import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeslaLogo from '../assets/tesla_logo.png';
import NavLink from './ui/NavLink';
import { Link } from 'react-router-dom';

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={TeslaLogo} alt="Tesla Logo" className="nav__logo" />
        </Link>
        <ul className="nav__links">
          <NavLink
            title="Model S"
          />
          <NavLink
            title="Model 3"
          />
          <NavLink
            title="Model X"
          />
          <NavLink
            title="Model Y"
          />
          <NavLink
            title="Solar Roofs"
          />
          <NavLink
            title="Solar Panels"
          />
          <NavLink
            title="Powerwall"
          />
        </ul>
        <ul className="nav__links">
        <li className="nav__list">
            <Link to="/" className={isMenuOpen ? "nav__link--hidden" : "nav__link"}>
              Shop
            </Link>
          </li>
          <li className="nav__list">
            <Link exact to="/login" className={isMenuOpen ? "nav__link--hidden" : "nav__link"}>
              Account
            </Link>
          </li>
          <div
            className="nav__list nav__link nav__menu--btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon="times" size="lg" className="nav__menu--btn" />
              ) : (
                "Menu"
              )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
