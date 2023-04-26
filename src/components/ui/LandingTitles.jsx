import React from 'react';
import '../Landing.css';
import { Link } from 'react-router-dom';

const LandingTitles = () => {
  return (
    <div className="landing__info--txt">
      <h1 className="landing__title">
        Model Y
      </h1>
      <Link to="/teslaaccount">
        <h4 className="href landing__sub-title">
          View Inventory
        </h4>
      </Link>
    </div>
  );
}

export default LandingTitles;
