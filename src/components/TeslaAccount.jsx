import React from 'react';
import './TeslaAccount.css';
import AccountNav from './AccountNav';
import DashBoardElement from './ui/DashBoardElement';
import SolarPanel from '../assets/solar-marketing_img.jpeg'
import Teslas from '../assets/teslas.png'
import ThirdParty from '../assets/third_party.jpeg'
import AccountSubNav from './AccountSubNav';

// import AccountSubNav from './AccountSubNav';
// import Car from './Car';
// import Nav from './Nav';
// import NavLink from './ui/NavLink';

const TeslaAccount = ({ user, isMenuOpen, setIsMenuOpen }) => {
  return (
    <section id="tesla__account">
      <AccountNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <AccountSubNav
        user={user}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="container">
        <div className="row">
          <main className="teslaaccount__dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard__elements">
              <DashBoardElement
                img={SolarPanel}
                name="Tesla Solar Panel"
                title="Order Tesla Panel"
                para="Produce energy to power your Tesla life"
                cta="View Solar"
              />
              <DashBoardElement
                img={Teslas}
                name="Tesla Solar Panel"
                title="Order Tesla Panel"
                para="Produce energy to power your Tesla life"
                cta="View Solar"
              />
              <DashBoardElement
                img={ThirdParty}
                name="Tesla Car"
                title="Purchased a car from a third party?"
                para="Learn more"
                cta="Add"
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default TeslaAccount;
