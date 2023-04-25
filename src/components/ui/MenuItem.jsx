import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title }) => {
  return (
    <li className="menu__item">
      <Link to="/" className="menu__link">{title}</Link>
    </li>
  );
}

export default MenuItem;
