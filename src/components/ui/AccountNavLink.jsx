import React from 'react';
import { Link } from 'react-router-dom';

const AccountNavLink = ({ title }) => {
  return (
    <li className="account__nav--list">
      <Link to="/teslaaccount" className="account__nav--link">
        {title}
      </Link>
    </li>
  );
}

export default AccountNavLink;
