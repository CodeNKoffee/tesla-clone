import React from 'react';
import '../Landing.css';
import { Link } from 'react-router-dom';

const LandingBtns = () => {
  return (
    <div className="landing__btns">
      <Link to="/login">
        <button className="btn landing__btn landing__btn--primary">
          Order Now
        </button>
      </Link>
      <Link to="/login">
        <button className="btn landing__btn">
          Demo Drive
        </button>
      </Link>
    </div>
  );
}

export default LandingBtns;
