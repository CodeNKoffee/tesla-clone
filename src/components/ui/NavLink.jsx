import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ title }) => {
  return (
    <li className="nav__list">
      <Link to="/" className="nav__link">
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
