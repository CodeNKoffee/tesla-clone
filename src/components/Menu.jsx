import React from 'react';
import './Menu.css';
import MenuItem from './ui/MenuItem';

const Menu = () => {
  return (
    <div className="menu__backdrop">
      <ul className="menu__links">
        <MenuItem title="Existing Inventory" />
        <MenuItem title="Used Inventory" />
        <MenuItem title="Trade-in" />
        <MenuItem title="Demo Drive" />
        <MenuItem title="Insurance" />
        <MenuItem title="Cyber Truck" />
        <MenuItem title="Roadster" />
        <MenuItem title="Semi" />
        <MenuItem title="Charging" />
        <MenuItem title="Commercial Energies" />
        <MenuItem title="Utilities" />
        <MenuItem title="Find Us" />
        <MenuItem title="Support" />
        <MenuItem title="Investor Relations" />
        <MenuItem title="Region" />
      </ul>
    </div>
  );
}

export default Menu;
