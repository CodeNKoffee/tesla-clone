import React from 'react';
import './CredentialsNav.css';
import { Link } from 'react-router-dom';
import TeslaLogo from '../assets/tesla_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CredentialsNav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={TeslaLogo} alt="Tesla Logo" className="nav__logo" />
        </Link>
        <button className="btn credential__lang">
          <FontAwesomeIcon className="credential__icon" icon="globe" />
          <span className="credential__lang--txt">en-US</span>
        </button>
      </div>
    </nav>
  );
}

export default CredentialsNav;
