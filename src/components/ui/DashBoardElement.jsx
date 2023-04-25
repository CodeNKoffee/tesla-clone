import React from 'react';
import '../TeslaAccount.css'
import { Link } from 'react-router-dom';

const DashBoardElement = ({ img, name, title, para, cta }) => {
  return (
    <div className="dashboard__element">
      <figure className="dashboard__element--img--wrapper">
        <img src={img} alt={name} className="dashboard__element--img" />
      </figure>
      <div className="dashboard__element--info">
        <h4 className="dashboard__element--title">
          {title}
        </h4>
        <p className="dashboard__element--para">
          {para}
        </p>
        <Link to="/">
          <h4 className="href dashboard__element--btn">
            {cta}
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default DashBoardElement;
