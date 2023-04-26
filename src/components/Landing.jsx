import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = ({ user }) => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__info">
            <div className="landing__info--txt">
              <h1 className="landing__title">
                Model Y
              </h1>
              <Link to="/">
                <h4 className="href landing__sub-title">
                  View Inventory
                </h4>
              </Link>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
